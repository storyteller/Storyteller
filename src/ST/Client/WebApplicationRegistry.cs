using System.IO;
using FubuCore.Logging;
using FubuMVC.Core;
using StoryTeller.Commands;
using StoryTeller.Remotes;
using StructureMap.Configuration.DSL;
using ST.Files;

namespace ST.Client
{
    public class WebApplicationRegistry : Registry
    {
        public WebApplicationRegistry()
        {
            For<ISpecFileWatcher>().Use<SpecFileWatcher>();

            ForSingletonOf<IClientConnector>().Use<ClientConnector>();
            ForSingletonOf<AssetFileWatcher>().Use<AssetFileWatcher>();


            ForSingletonOf<IPersistenceController>().Use<PersistenceController>();

            For<IApplicationFiles>().Use(new ApplicationFiles(Directory.GetCurrentDirectory()));

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