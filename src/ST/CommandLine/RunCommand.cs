using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Baseline;
using Oakton;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Remotes;
using StoryTeller.Remotes.Messaging;
using StoryTeller.Results;

namespace ST.CommandLine
{
    [Description("Run a suite of StoryTeller tests")]
    public class RunCommand : OaktonCommand<RunInput>
    {
        public RunCommand()
        {
            Usage("Execute").Arguments(x => x.Path);
            Usage("Execute and save results").Arguments(x => x.Path, x => x.ResultsPathFlag);
        }

        public override bool Execute(RunInput input)
        {
            try
            {
                var top = HierarchyLoader.ReadHierarchy(input.SpecPath);
                var specs = input.GetBatchRunRequest().Filter(top);

                if (!specs.Any())
                {
                    ConsoleWriter.Write(ConsoleColor.Yellow, "Warning: No specs found!");
                }
            }
            catch (SuiteNotFoundException ex)
            {
                ConsoleWriter.Write(ConsoleColor.Red, ex.Message);
                return false;
            }

            var controller = input.BuildRemoteController();
            var task = controller.Start(EngineMode.Batch).ContinueWith(t =>
            {
                var systemRecycled = t.Result;
                if (!systemRecycled.success)
                {
                    systemRecycled.WriteSystemUsage();
                    return false;
                }

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

                var success = regression.Failed == 0;

                results.suite = input.WorkspaceFlag;
                results.system = systemRecycled.system_name;
                results.time = DateTime.Now.ToString();
                results.fixtures = systemRecycled.fixtures;

                var document = BatchResultsWriter.BuildResults(results);
                Console.WriteLine("Writing results to " + input.ResultsPathFlag);
                document.WriteToFile(input.ResultsPathFlag);

                if (input.DumpFlag.IsNotEmpty())
                {
                    dumpJson(input, results);
                }

                if (input.CsvFlag.IsNotEmpty())
                {
                    writePerformanceData(input, results);
                }

                if (input.JsonFlag.IsNotEmpty())
                {
                    Console.WriteLine("Writing the raw result information to " + input.JsonFlag);
                    PerformanceDataWriter.WriteJSON(results, input.JsonFlag);
                }

                if (input.OpenFlag)
                {
                    Process.Start(input.ResultsPathFlag);
                }

                if (success)
                {
                    ConsoleWriter.Write(ConsoleColor.Green, "Success!");
                }
                else
                {
                    ConsoleWriter.Write(ConsoleColor.Red, "Failed with Regression Failures!");
                }

                return success;
            });

            task.Wait();

            controller.SafeDispose();

            return task.Result;
        }

        private static void writePerformanceData(RunInput input, BatchRunResponse results)
        {
            Console.WriteLine("Writing performance data as CSV data to " + input.CsvFlag.ToFullPath());

            PerformanceDataWriter.WriteCSV(results, input.CsvFlag);
        }

        private static void dumpJson(RunInput input, BatchRunResponse results)
        {
            Console.WriteLine("Dumping the raw JSON results to " + input.DumpFlag);
            var json = JsonSerialization.ToJson(results);
            new FileSystem().WriteStringToFile(input.DumpFlag, json);
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
