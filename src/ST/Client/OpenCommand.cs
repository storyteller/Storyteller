using System;
using System.Diagnostics;
using System.Threading;
using Baseline;
using Oakton;

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

                Process.Start(runner.BaseAddress);

                AppDomain.CurrentDomain.DomainUnload += (sender, args) =>
                {
                    runner.SafeDispose();
                };

                Console.CancelKeyPress += (s, e) =>
                {
                    Console.WriteLine("Shutdown detected, tearing down the testing harness...");
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