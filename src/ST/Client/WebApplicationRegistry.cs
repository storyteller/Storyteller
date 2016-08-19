using System.IO;
using StoryTeller.Commands;
using StructureMap;
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

            Scan(x =>
            {
                x.AssemblyContainingType<ICommand>();
                x.AssemblyContainingType<OpenInput>();

                x.AddAllTypesOf<ICommand>();
            });
        }
    }
}