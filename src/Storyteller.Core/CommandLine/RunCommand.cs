using System;
using System.Collections.Generic;
using FubuCore;
using FubuCore.CommandLine;
using Storyteller.Core.Engine;
using Storyteller.Core.Model;
using Storyteller.Core.Remotes;
using Storyteller.Core.Remotes.Messaging;

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
                    systemRecycled.WriteSystemUsage();
                    return false;
                }
                else
                {
                    writeSystemUsage(systemRecycled);
                    var execution = input.StartBatch(controller);

                    // TODO -- put a command level timeout on this thing
                    execution.Wait();

                    var results = execution.Result;

                    var regression = results.Summarize(Lifecycle.Regression);
                    var acceptance = results.Summarize(Lifecycle.Acceptance);

                    if (input.LifecycleFlag != Lifecycle.Regression)
                    {
                        Console.WriteLine(acceptance);
                    }

                    if (input.LifecycleFlag != Lifecycle.Acceptance)
                    {
                        Console.WriteLine(regression);
                    }

                    return regression.Failed == 0;
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


    }
}