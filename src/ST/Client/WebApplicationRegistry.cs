using Bottles;
using FubuCore.Logging;
using StoryTeller.Commands;
using StoryTeller.Remotes;
using StructureMap.Configuration.DSL;

namespace ST.Client
{
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