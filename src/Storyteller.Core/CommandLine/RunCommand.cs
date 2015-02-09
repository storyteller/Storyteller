using System;
using System.Collections.Generic;
using FubuCore;
using FubuCore.CommandLine;
using Storyteller.Core.Remotes;

namespace Storyteller.Core.CommandLine
{
    [CommandDescription("Run a suite of StoryTeller tests")]
    public class RunCommand : FubuCommand<RunInput>
    {
        public RunCommand()
        {
            Usage("Execute").Arguments(x => x.Path);
            Usage("Execute and save results").Arguments(x => x.Path, x => x.ResultsPath);
        }

        public override bool Execute(RunInput input)
        {
            var controller = input.BuildRemoteController();
            var task = controller.Start(EngineMode.Batch).ContinueWith(t =>
            {
                var systemRecycled = t.Result;
                if (!systemRecycled.success)
                {
                    writeSystemFailure(systemRecycled);
                    return false;
                }
                else
                {
                    writeSystemUsage(systemRecycled);

                    return true;
                }
            });

            task.Wait();

            controller.SafeDispose();

            return task.Result;
        }

        private void writeSystemUsage(SystemRecycled systemRecycled)
        {
            Console.WriteLine("Using System: " + systemRecycled.system_name);
            systemRecycled.properties.Each(pair =>
            {
                Console.WriteLine("{0}: {1}", pair.Key, pair.Value);
            });
            Console.WriteLine();
        }

        private static void writeSystemFailure(SystemRecycled systemRecycled)
        {
            Console.WriteLine("Failed to initialize the Storyteller System");
            Console.WriteLine();
            ConsoleWriter.Write(ConsoleColor.Yellow, systemRecycled.error);
            Console.WriteLine();
        }
    }
}