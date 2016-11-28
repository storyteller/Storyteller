using System;
using System.Diagnostics;
using System.Linq;
using Baseline;
using Oakton;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Model.Persistence.DSL;
using StoryTeller.Remotes;
using StoryTeller.Remotes.Messaging;
using StoryTeller.Results;
using EngineController = ST.Client.EngineController;

namespace ST.CommandLine
{
    [Description("Run a suite of StoryTeller tests")]
    public class RunCommand : OaktonCommand<RunInput>
    {
        public RunCommand()
        {
            Usage("Execute from the current project path").Arguments();
            Usage("Execute").Arguments(x => x.Path);
        }

        public override bool Execute(RunInput input)
        {
            try
            {
                var top = HierarchyLoader.ReadHierarchy(input.SpecPath);
                var specs = input.GetBatchRunRequest().Filter(top);

                if (!specs.Any())
                    ConsoleWriter.Write(ConsoleColor.Yellow, "Warning: No specs found!");
            }
            catch (SuiteNotFoundException ex)
            {
                ConsoleWriter.Write(ConsoleColor.Red, ex.Message);
                return false;
            }

            var controller = input.BuildEngine();
            var task = controller.Start().ContinueWith(t =>
            {
                var systemRecycled = t.Result;
                return executeAgainstTheSystem(input, systemRecycled, controller);
            });

            task.Wait();

            controller.SafeDispose();

            return task.Result;
        }

        private bool executeAgainstTheSystem(RunInput input, SystemRecycled systemRecycled, EngineController controller)
        {
            if (!systemRecycled.success)
            {
                systemRecycled.WriteSystemUsage();
                return false;
            }

            writeSystemUsage(systemRecycled);

            if (input.ValidateFlag)
            {
                return validateOnly(input, systemRecycled);
            }


            var execution = input.StartBatch(controller);

            // TODO -- put a command level timeout on this thing
            execution.Wait();

            var results = execution.Result;

            var success = determineSuccess(input, results);

            writeResults(input, systemRecycled, results);

            writeData(input, results);

            openResults(input);

            writeSuccessOrFailure(success);

            return success;
        }

        private bool validateOnly(RunInput input, SystemRecycled systemRecycled)
        {
            var fixtures = buildFixturesWithOverrides(input, systemRecycled);
            var library = FixtureLibrary.From(fixtures);

            var specs = HierarchyLoader.ReadHierarchy(input.SpecPath).GetAllSpecs().ToArray();

            SpecificationPostProcessor.PostProcessAll(specs, library);

            var errored = specs.Where(x => x.errors.Any()).ToArray();

            if (errored.Any())
            {
                ConsoleWriter.Write(ConsoleColor.Red, "Errors Detected!");

                foreach (var errorSpec in errored)
                {
                    ConsoleWriter.Write(ConsoleColor.Yellow, errorSpec.Filename);
                    foreach (var error in errorSpec.errors)
                    {
                        Console.WriteLine( $"{error.location.Join(" / ")} -> {error.message}");
                    }
                }

                return false;
            }
            else
            {
                ConsoleWriter.Write(ConsoleColor.Green, "No validation errors or missing data detected in this project");
                return true;
            }
        }



        private static void openResults(RunInput input)
        {
            if (input.OpenFlag)
            {
                Process.Start(input.ResultsPathFlag);
            }
        }

        private static void writeSuccessOrFailure(bool success)
        {
            if (success)
            {
                ConsoleWriter.Write(ConsoleColor.Green, "Success!");
            }
            else
            {
                ConsoleWriter.Write(ConsoleColor.Red, "Failed with Regression Failures!");
            }
        }

        private static bool determineSuccess(RunInput input, BatchRunResponse results)
        {
            var regression = results.Summarize(Lifecycle.Regression);
            var acceptance = results.Summarize(Lifecycle.Acceptance);

            if (input.LifecycleFlag != Lifecycle.Regression)
                Console.WriteLine(acceptance);

            if (input.LifecycleFlag != Lifecycle.Acceptance)
                Console.WriteLine(regression);

            return regression.Failed == 0;
        }

        private static void writeResults(RunInput input, SystemRecycled systemRecycled, BatchRunResponse results)
        {
            results.suite = input.WorkspaceFlag;
            results.system = systemRecycled.system_name;
            results.time = DateTime.Now.ToString();

            results.fixtures = buildFixturesWithOverrides(input, systemRecycled);

            var document = BatchResultsWriter.BuildResults(results);
            Console.WriteLine("Writing results to " + input.ResultsPathFlag);
            document.WriteToFile(input.ResultsPathFlag);
        }

        private static void writeData(RunInput input, BatchRunResponse results)
        {
            if (input.DumpFlag.IsNotEmpty())
                dumpJson(input, results);

            if (input.CsvFlag.IsNotEmpty())
                writePerformanceData(input, results);

            if (input.JsonFlag.IsNotEmpty())
            {
                Console.WriteLine("Writing the raw result information to " + input.JsonFlag);
                PerformanceDataWriter.WriteJSON(results, input.JsonFlag);
            }
        }

        private static FixtureModel[] buildFixturesWithOverrides(RunInput input, SystemRecycled systemRecycled)
        {
            var overrides = FixtureLoader.LoadFromPath(input.FixturePath);
            var system = new FixtureLibrary();
            foreach (var fixture in systemRecycled.fixtures)
            {
                system.Models[fixture.key] = fixture;
            }

            return system.ApplyOverrides(overrides).Models.ToArray();
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
            systemRecycled.properties.Each(pair => { Console.WriteLine("{0}: {1}", pair.Key, pair.Value); });
            Console.WriteLine();
        }
    }
}