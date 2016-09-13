using System;
using System.IO;
using Baseline;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.FileProviders;
using StoryTeller;
using StoryTeller.Commands;
using StructureMap;

namespace ST.Client
{
    public class WebApplicationRunner : IDisposable
    {
        private readonly OpenInput _input;
        private IContainer _container;
        private IWebHost _server;

        public WebApplicationRunner(OpenInput input)
        {
            _input = input;
        }

        public RemoteController Controller { get; private set; }

        public string BaseAddress { get; private set; }
        public void Dispose()
        {
            Controller.Teardown();
            _server.SafeDispose();
            _container.Dispose();
        }

        public void Start()
        {
            Controller = _input.BuildRemoteController();
            var context = new StorytellerContext(Controller, _input);

            Controller.AssertValid();


            context.Start();

            var port = PortFinder.FindPort(5000);
            if (_input.WebSocketAddressFlag.IsNotEmpty())
            {
                port = new Uri(_input.WebSocketAddressFlag).Port;
            }


            BaseAddress = "http://localhost:" + port;

            var webSockets = new WebSocketsHandler();


            var webSocketsAddress = $"ws://127.0.0.1:{port}";

            // TODO -- fugly as hell. Either do it all the SM way, or rip out SM
            var registry = new WebApplicationRegistry(webSocketsAddress, webSockets, Controller, context);
            _container = new Container(registry);

            

            var baseDirectory = AppContext.BaseDirectory;
            var host = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(baseDirectory)
                .UseUrls($"http://localhost:{port}")
                .Configure(app =>
                {
                    app.UseWebSockets();

                    app.Use(async (http, next) =>
                    {
                        if (http.WebSockets.IsWebSocketRequest)
                        {
                            await webSockets.HandleSocket(http).ConfigureAwait(false);
                        }
                        else
                        {
                            await next().ConfigureAwait(false);
                        }
                    });

                    app.UseStaticFiles(new StaticFileOptions
                    {
                        ServeUnknownFileTypes = true,
                        FileProvider = new PhysicalFileProvider(baseDirectory)
                    });

                    app.Run(async (http) =>
                    {
                        var endpoint = _container.GetInstance<HomeEndpoint>();
                        var html = endpoint.Index().ToString();

                        http.Response.ContentType = "text/html";
                        await http.Response.WriteAsync(html).ConfigureAwait(false);
                    });
                });

            _server = host.Start();


            Controller.AddListener(_container.GetInstance<IClientConnector>());

            _container.GetInstance<AssetFileWatcher>().Start();

            var persistence = _container.GetInstance<IPersistenceController>();
            persistence.StartWatching(context.SpecPath);
            context.AddRemoteListener(persistence);
            
        }
    }
}