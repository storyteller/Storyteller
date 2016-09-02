using System.IO;
using StoryTeller.Commands;
using StoryTeller.Files;
using StructureMap;

namespace ST.Client
{
    public class WebApplicationRegistry : Registry
    {
        public WebApplicationRegistry(string webSocketAddress, WebSocketsHandler webSockets, IRemoteController controller, StorytellerContext context)
        {
            For<StorytellerContext>().Use(context);
            For<IRemoteController>().Use(controller);

            ForSingletonOf<IClientConnector>()
                .Use<ClientConnector>()
                .SetProperty(x => x.WebSocketsAddress = webSocketAddress);

            For<WebSocketsHandler>().Use(webSockets);

            For<ISpecFileWatcher>().Use<SpecFileWatcher>();

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