using System;
using System.Diagnostics;
using System.Threading;
using FubuCore.CommandLine;

namespace ST.Client
{
    [CommandDescription("Opens the specification editor web tool")]
    public class OpenCommand : FubuCommand<OpenInput>
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

                Console.CancelKeyPress += (s, e) =>
                {
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