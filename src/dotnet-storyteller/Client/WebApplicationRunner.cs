using System;
using System.Reflection;
using Baseline;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.FileProviders;
using StoryTeller;
using StoryTeller.Messages;
using StoryTeller.Model;
using StoryTeller.Remotes;
using ST.Preview;

namespace ST.Client
{
    public interface IApplication : IDisposable
    {
        IEngineController Engine { get; }
        IClientConnector Client { get; }
        IPersistenceController Persistence { get; }
        SystemRecycled LatestSystemRecycled { get; }
        IFixtureController Fixtures { get; }
        QueueState QueueState { get; }
        Batch BuildInitialModel();
    }

    public interface IWebApplicationRunner : IDisposable
    {
        IClientConnector Start(IApplication application);
        string BaseAddress { get; }
    }

    public class WebApplicationRunner : IWebApplicationRunner
    {
        private readonly OpenInput _input;
        private FixtureController _fixtures;
        private IWebHost _server;
        private AssetFileWatcher _watcher;
        private CommandRunner _commands;
        private IApplication _application;

        public WebApplicationRunner(OpenInput input)
        {
            _input = input;
        }


        public string BaseAddress { get; private set; }


        public IClientConnector Client { get; private set; }


        public void Dispose()
        {
            _server.SafeDispose();
            _watcher?.Dispose();
        }



        public IClientConnector Start(IApplication application)
        {
            var port = PortFinder.FindPort(5000);

            _application = application;

            BaseAddress = "http://localhost:" + port;

            var webSockets = new WebSocketsHandler();

            _commands = new CommandRunner(application);


            Client = new ClientConnector(webSockets, _commands.HandleJson)
            {
                WebSocketsAddress = $"ws://127.0.0.1:{port}"
            };

            startWebServer(port, webSockets);

            _watcher = new AssetFileWatcher(Client);
            _watcher.Start();

            return Client;
        }

        private void startWebServer(int port, WebSocketsHandler webSockets)
        {
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
                            await webSockets.HandleSocket(http).ConfigureAwait(false);
                        else
                            await next().ConfigureAwait(false);
                    });

#if DEBUG
                    configureStaticFiles(app);
#endif

                    app.Run(async http =>
                    {
                        if (http.Request.Path == "/favicon.ico")
                        {
                            var stream =
                                GetType()
                                    .GetTypeInfo()
                                    .Assembly.GetManifestResourceStream("dotnet-storyteller.favicon.ico");

                            http.Response.ContentType = "image/x-icon";
                            await stream.CopyToAsync(http.Response.Body).ConfigureAwait(false);

                            return;
                        }

                        string html;
                        if (http.Request.Path.HasValue && http.Request.Path.Value == "/preview")
                        {
                            html = ExportWriter.BuildPage(_application);
                        }
                        else
                        {
                            html = HomeEndpoint.BuildPage(_application, _input).ToString();
                        }


                        http.Response.ContentType = "text/html";
                        await http.Response.WriteAsync(html).ConfigureAwait(false);
                    });
                });

            _server = host.Start();
        }

        private void configureStaticFiles(IApplicationBuilder app)
        {
            var baseDirectory = AssetFileWatcher.FindRootFolder();

            var clientRoot = AssetFileWatcher.FindClientFolder();

            app.UseStaticFiles(new StaticFileOptions
            {
                ServeUnknownFileTypes = true,
                FileProvider =
                    new CompositeFileProvider(new PhysicalFileProvider(baseDirectory),
                        new PhysicalFileProvider(clientRoot))
            });
        }
    }
}