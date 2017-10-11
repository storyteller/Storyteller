using System;
using Baseline;
using Oakton;
using StoryTeller;

namespace ST.Client
{
    [Description("Opens the specification editor web tool")]
    public class OpenCommand : OaktonCommand<OpenInput>
    {
        public OpenCommand()
        {
            Usage("Open the Storyteller client to the current project").Arguments();
            Usage("Open the Storyteller client to the named project").Arguments(x => x.Path);
        }

        public override bool Execute(OpenInput input)
        {
            input.CreateMissingSpecFolder();



            using (var app = new ApplicationController(input, input.BuildEngine(), new WebApplicationRunner(input)))
            {
                app.Start();

                Console.WriteLine("Launching the browser to " + app.Website.BaseAddress);

                ProcessLauncher.GotoUrl(app.Website.BaseAddress);

#if NET46
                AppDomain.CurrentDomain.DomainUnload += (sender, args) =>
                {
                    app.SafeDispose();
                };

#else
                System.Runtime.Loader.AssemblyLoadContext.Default.Unloading += context => app.Dispose();
#endif

                Console.CancelKeyPress += (s, e) =>
                {
                    Console.WriteLine("Shutdown detected, tearing down the testing harness...");
                    app.SafeDispose();
                };

                tellUsersWhatToDo(app.Website.BaseAddress);

                while (true)
                {
                    var key = Console.ReadKey();
                    if (key.Key == ConsoleKey.Q)
                    {
                        Console.WriteLine();
                        Console.WriteLine("Shutting down the Storyteller documentation preview runner....");
                        app.SafeDispose();
                        Console.WriteLine("Done, exiting...");

                        break;
                    }


                }
            }


            return true;
        }


        private static void tellUsersWhatToDo(string runnerBaseAddress)
        {
            ConsoleWriter.Write(ConsoleColor.Cyan, "Website available at " + runnerBaseAddress);
            Console.WriteLine("Type 'q' to shut down cleanly, or 'ctrl + c' to kill the process");
        }
    }
}