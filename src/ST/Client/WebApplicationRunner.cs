using System;
using System.Threading.Tasks;
using Baseline;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.FileProviders;
using StoryTeller;
using StoryTeller.Remotes;

namespace ST.Client
{
    public interface IApplication
    {
        IRemoteController Remote { get; }
        IClientConnector Client { get; }
        IPersistenceController Persistence { get; }
    }

    public class WebApplicationRunner : IDisposable, IApplication
    {
        private readonly OpenInput _input;
        private FixtureController _fixtures;
        private IWebHost _server;
        private AssetFileWatcher _watcher;
        private CommandRunner _commands;

        public WebApplicationRunner(OpenInput input)
        {
            _input = input;
        }

        public IRemoteController Remote { get; private set; }

        public string BaseAddress { get; private set; }

        public Task<SystemRecycled> Startup { get; private set; }

        public IClientConnector Client { get; private set; }

        public IPersistenceController Persistence { get; private set; }

        public SystemRecycled LatestSystemRecycled
        {
            get
            {
                var recycled = Remote.LatestSystemRecycled ?? Startup.Result;
                recycled.properties["Spec Directory"] = _input.SpecPath;

                return recycled;
            }
        }

        public void Dispose()
        {
            Remote.Teardown();
            _server.SafeDispose();
            _watcher?.Dispose();

            Persistence.Dispose();
        }



        public void Start()
        {
            Remote = _input.BuildRemoteController();

            Remote.AssertValid();

            


            Startup = Remote.Start().ContinueWith(t =>
            {
                t.Result.WriteSystemUsage();

                return t.Result;
            });

            var port = PortFinder.FindPort(5000);
            if (_input.WebSocketAddressFlag.IsNotEmpty())
                port = new Uri(_input.WebSocketAddressFlag).Port;


            BaseAddress = "http://localhost:" + port;

            var webSockets = new WebSocketsHandler();

            _commands = new CommandRunner(this);


            Client = new ClientConnector(webSockets, _commands.HandleJson)
            {
                WebSocketsAddress = $"ws://127.0.0.1:{port}"
            };

            startWebServer(port, webSockets);


            Remote.AddListener(Client);

            _watcher = new AssetFileWatcher(Client);

            Persistence = new PersistenceController(Client, new SpecFileWatcher());
            Persistence.StartWatching(_input.SpecPath);
            Remote.Messaging.AddListener(Persistence);

            _fixtures = new FixtureController(Client, new FixtureFileWatcher());
            _fixtures.StartWatching(_input.FixturePath);
            Remote.Messaging.AddListener(_fixtures);


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
                        var html = HomeEndpoint.BuildPage(LatestSystemRecycled, Client, Persistence).ToString();

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