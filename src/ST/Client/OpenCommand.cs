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

            using (var runner = new WebApplicationRunner(input))
            {
                runner.Start();
                Console.WriteLine("Launching the browser to " + runner.BaseAddress);

                ProcessLauncher.GotoUrl(runner.BaseAddress);

#if NET46
                AppDomain.CurrentDomain.DomainUnload += (sender, args) =>
                {
                    runner.SafeDispose();
                };

#else
                System.Runtime.Loader.AssemblyLoadContext.Default.Unloading += context => runner.SafeDispose();
#endif

                Console.CancelKeyPress += (s, e) =>
                {
                    Console.WriteLine("Shutdown detected, tearing down the testing harness...");
                    runner.SafeDispose();
                    reset.Set();
                };

                tellUsersWhatToDo();
                reset.WaitOne();
            }

            return true;
        }


        private static void tellUsersWhatToDo()
        {
            Console.WriteLine("Type 'ctrl + c' to quit");
        }
    }
}