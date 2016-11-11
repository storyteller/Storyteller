using System;
using System.Diagnostics;
using System.Threading;
using Baseline;
using Oakton;
using StoryTeller;

namespace ST.Client
{
    [Description("Opens the specification editor web tool")]
    public class OpenCommand : OaktonCommand<OpenInput>
    {
        public override bool Execute(OpenInput input)
        {
            input.CreateMissingSpecFolder();

            var reset = new ManualResetEvent(false);


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
                    reset.Set();
                };

                tellUsersWhatToDo(app.Website.BaseAddress);
                reset.WaitOne();
            }


            return true;
        }


        private static void tellUsersWhatToDo(string runnerBaseAddress)
        {
            ConsoleWriter.Write(ConsoleColor.Cyan, "Website available at " + runnerBaseAddress);
            Console.WriteLine("Type 'ctrl + c' to quit");
        }
    }
}