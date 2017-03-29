using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json.Linq;
using StorytellerRunner;
using StoryTeller;

namespace Storyteller.Redux
{
    public class WebSocketServer : IDisposable
    {
        
        private readonly WebSocketsHandler _webSockets;
        private IWebHost _server;

        public WebSocketServer()
        {
            _webSockets = new WebSocketsHandler
            {
                Received = receiveJson
            };

            Port = PortFinder.FindPort(5100);
        }

        public ReduxSpecContext CurrentContext { get; set; } = new ReduxSpecContext(SpecContext.Basic());

        public int Port { get; }

        public void Dispose()
        {
            _server.Dispose();
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
            CurrentContext.CurrentState = token["state"].ToString();
            CurrentContext.Revision = token["revision"].ToObject<int>();
        }

        public void Start()
        {
            var host = new WebHostBuilder()
                .UseKestrel()
                .UseUrls($"http://localhost:{Port}")
                .Configure(app =>
                {
                    app.UseWebSockets();

                    app.Use(async (http, next) =>
                    {
                        if (http.WebSockets.IsWebSocketRequest)
                            await _webSockets.HandleSocket(http).ConfigureAwait(false);
                        else
                            await next().ConfigureAwait(false);
                    });

                    app.Run(async http =>
                    {
                        http.Response.StatusCode = 200;
                        http.Response.ContentType = "text/plain";
                        await http.Response.WriteAsync("Nothing to see here.");
                    });
                });

            _server = host.Start();
        }
    }
}