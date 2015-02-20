using System;
using System.Diagnostics;
using Bottles;
using FubuCore.CommandLine;
using FubuMVC.Core;
using FubuMVC.Katana;
using FubuMVC.StructureMap;
using Storyteller.Core.Commands;
using Storyteller.Core.Remotes;
using StructureMap;

namespace ST.Client
{
    public class OpenCommand : FubuCommand<OpenInput>
    {
        public override bool Execute(OpenInput input)
        {
            var controller = input.BuildRemoteController();


            var context = new StorytellerContext(controller, input);
            context.Start();

            var container = new Container(_ =>
            {
                _.For<ISpecFileWatcher>().Use<SpecFileWatcher>();
                _.For<IRemoteController>().Use(controller);
                _.For<StorytellerContext>().Use(context);
                _.ForSingletonOf<IClientConnector>().Use<ClientConnector>();
                _.ForSingletonOf<AssetFileWatcher>().Use<AssetFileWatcher>();
                _.For<IActivator>().Add<StartWatchingAssets>();

                _.ForSingletonOf<IPersistenceController>().Use<PersistenceController>();

                _.For<IActivator>().Add<ClientConnectorActivator>();
                _.For<IActivator>().Add<StartWatchingFilesActivator>();

                _.Scan(x =>
                {
                    x.AssemblyContainingType<ICommand>();
                    x.AssemblyContainingType<OpenInput>();

                    x.AddAllTypesOf<ICommand>();
                });
            });



            using (var server = FubuApplication.DefaultPolicies().StructureMap(container).RunEmbeddedWithAutoPort())
            {
                Console.WriteLine("Launching the browser to " + server.BaseAddress);

                Process.Start(server.BaseAddress);

                tellUsersWhatToDo();
                ConsoleKeyInfo key = Console.ReadKey();
                while (key.Key != ConsoleKey.Q)
                {
                    
                }

                Console.WriteLine("Shutting down.");
                controller.Teardown();
            }

            return true;
        }

        private static void tellUsersWhatToDo()
        {
            Console.WriteLine("Press 'q' to quit");
        }
    }
}