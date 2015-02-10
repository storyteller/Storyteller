using System;
using System.Diagnostics;
using FubuCore.CommandLine;
using FubuMVC.Core;
using FubuMVC.Katana;
using FubuMVC.StructureMap;
using StructureMap;

namespace ST.Client
{
    public class OpenCommand : FubuCommand<OpenInput>
    {
        public override bool Execute(OpenInput input)
        {
            var controller = input.BuildRemoteController();




            var connector = new ClientConnector(controller);
            connector.Start();

            var context = new StorytellerContext(controller, input);
            context.Start();

            var container = new Container(_ =>
            {
                _.For<StorytellerContext>().Use(context);
                _.For<IClientConnector>().Use(connector);
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
            }

            return true;
        }

        private static void tellUsersWhatToDo()
        {
            Console.WriteLine("Press 'q' to quit");
        }
    }
}