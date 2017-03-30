using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json.Linq;
using StorytellerRunner;
using StoryTeller;
using StoryTeller.Remotes.Messaging;

namespace Storyteller.Redux
{
    public class WebSocketServer : IDisposable
    {
        private readonly IList<TaskCompletionSource<bool>> _connectionWaiters
            = new List<TaskCompletionSource<bool>>();

        private readonly WebSocketsHandler _webSockets;
        private IWebHost _host;

        public WebSocketServer()
        {
            _webSockets = new WebSocketsHandler
            {
                Received = receiveJson
            };

            Port = PortFinder.FindPort(5250);
        }

        public Task WaitForConnection(TimeSpan timeout)
        {
            if (_webSockets.ActiveCount > 0)
            {
                return Task.CompletedTask;
            }

            var timeoutTask = Task.Delay(timeout);
            var connected = new TaskCompletionSource<bool>();
            _connectionWaiters.Add(connected);

            return Task.WhenAny(connected.Task, timeoutTask);
        }

        public ReduxSpecContext CurrentContext { get; set; } = new ReduxSpecContext(SpecContext.Basic());

        public int Port { get; }

        public void Dispose()
        {
            _host.Dispose();
        }

        private void receiveJson(string json)
        {
            var token = JToken.Parse(json);
            var type = token.Value<string>("type");

            switch (type)
            {
                case "redux-state":
                    updateReduxState(token);
                    break;

                case "console.log":
                    recordTrace(token);
                    break;

                case "console.error":
                    recordJavascriptError(token);
                    break;
            }
        }

        private void recordJavascriptError(JToken token)
        {
            CurrentContext.RecordJsError(token["error"]?.ToString());        }

        private void recordTrace(JToken token)
        {
            CurrentContext.RecordJsError(token["text"]?.ToString());
        }

        private void updateReduxState(JToken token)
        {
            CurrentContext.UpdateState(token);  
        }

        public void Start()
        {
            _host = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseUrls("http://localhost:5250")
                
                .Configure(app =>
                {

                    app.UseWebSockets();

                    app.Use(async (http, next) =>
                    {
                        if (http.WebSockets.IsWebSocketRequest)
                        {
                            await _webSockets.HandleSocket(http).ConfigureAwait(false);
                            var connected = _connectionWaiters.ToArray();
                            foreach (var waiter in connected)
                            {
                                waiter.SetResult(true);
                                _connectionWaiters.Remove(waiter);
                            }
                        }
                        else
                        {
                            await next().ConfigureAwait(false);
                        }
                    });

                    app.Run(async http =>
                    {
                        http.Response.StatusCode = 200;
                        http.Response.ContentType = "text/plain";
                        await http.Response.WriteAsync($"Nothing to see here at {DateTime.Now}.");
                    });
                }).Build();

            _host.Start();
        }

        public void SendCloseMessage()
        {
            _webSockets.Send("CLOSE").Wait();
        }

        public void SendRefreshMessage()
        {
            _webSockets.Send("REFRESH").Wait();
        }

        public Task Send(object message)
        {
            var json = JsonSerialization.ToCleanJson(message);
            return _webSockets.Send(json);
        }

    }
}