using System;
using Bottles;
using FubuCore;
using FubuCore.Logging;
using FubuMVC.Core;
using FubuMVC.Katana;
using FubuMVC.StructureMap;
using StoryTeller.Commands;
using StoryTeller.Remotes;
using StructureMap;
using StructureMap.Configuration.DSL;

namespace ST.Client
{
    public class WebApplicationRunner : IDisposable
    {
        private readonly OpenInput _input;
        private RemoteController _controller;
        private EmbeddedFubuMvcServer _server;

        public WebApplicationRunner(OpenInput input)
        {
            _input = input;
        }

        public void Start()
        {
            _controller = _input.BuildRemoteController();
            var context = new StorytellerContext(_controller, _input);

            

            var container = new Container(new WebApplicationRegistry(_controller, context));
            var dataSource = container.GetInstance<RemoteSpecDataSource>();

            context.Start(dataSource);

            _server = FubuApplication.DefaultPolicies().StructureMap(container).RunEmbeddedWithAutoPort();
        }

        public string BaseAddress
        {
            get { return _server.BaseAddress; }
        }

        public void Dispose()
        {
            _controller.Teardown();
            _server.SafeDispose();
        }
    }

    public class WebApplicationRegistry : Registry
    {
        public WebApplicationRegistry(IRemoteController controller, StorytellerContext context)
        {
            For<ISpecFileWatcher>().Use<SpecFileWatcher>();
            For<IRemoteController>().Use(controller);
            For<StorytellerContext>().Use(context);
            ForSingletonOf<IClientConnector>().Use<ClientConnector>();
            ForSingletonOf<AssetFileWatcher>().Use<AssetFileWatcher>();


            ForSingletonOf<IPersistenceController>().Use<PersistenceController>();

            For<ILogger>().Use<Logger>();
            For<ILogListener>().Use<ExceptionListener>();

            For<IActivator>().Add<ClientConnectorActivator>();
            For<IActivator>().Add<StartWatchingFilesActivator>();
            For<IActivator>().Add<StartWatchingAssets>();

            Scan(x =>
            {
                x.AssemblyContainingType<ICommand>();
                x.AssemblyContainingType<OpenInput>();

                x.AddAllTypesOf<ICommand>();
            });
        }
    }
}