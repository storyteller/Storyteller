using System;
using System.Diagnostics;
using Bottles;
using FubuCore.CommandLine;
using FubuCore.Logging;
using FubuMVC.Core;
using FubuMVC.Katana;
using FubuMVC.StructureMap;
using StoryTeller.Commands;
using StoryTeller.Remotes;
using StructureMap;

namespace ST.Client
{
    public class OpenCommand : FubuCommand<OpenInput>
    {
        public override bool Execute(OpenInput input)
        {
            using (var runner = new WebApplicationRunner(input))
            {
                runner.Start();
                Console.WriteLine("Launching the browser to " + runner.BaseAddress);

                Process.Start(runner.BaseAddress);

                tellUsersWhatToDo();
                ConsoleKeyInfo key = Console.ReadKey();
                while (key.Key != ConsoleKey.Q)
                {

                }
            }

            return true;
        }

        private static void tellUsersWhatToDo()
        {
            Console.WriteLine("Press 'q' to quit");
        }
    }
}