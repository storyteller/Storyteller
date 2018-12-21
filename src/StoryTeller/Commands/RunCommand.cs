using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Baseline;
using Baseline.Dates;
using Oakton;
using StoryTeller.Engine;
using StoryTeller.Engine.Batching;
using StoryTeller.Model;
using StoryTeller.Model.Persistence.DSL;
using StoryTeller.Remotes;
using StoryTeller.Remotes.Messaging;
using StoryTeller.Results;
using StoryTeller.Util;

namespace StoryTeller.Commands
{
    [Description("Executes Specifications and Writes Results")]
    public class RunCommand : OaktonCommand<RunInput>
    {
        private ConsumingQueue _queue;

        public RunCommand()
        {
            Usage("Run all specifications").Arguments();
            Usage("Run specified specifications").Arguments(x => x.SpecificationOrSuite);
        }

        public override bool Execute(RunInput input)
        {
            input.ConfigureProject();
            
            bool success = false;
            
            try
            {
                var task = execute(input);
                task.Wait(input.GlobalTimeoutFlag.Minutes());

                success = task.IsCompleted && task.Result;

                if (!task.IsCompleted)
                {
                    ConsoleWriter.Write(ConsoleColor.Red, "Timed out!");
                    return false;
                }
            }
            finally
            {
                _queue?.Dispose();
            }


            return success;
        }
        
        

        private async Task<bool> execute(RunInput input)
        {
            var specFetching = input.ReadSpecs();
            var running = RunningSystem.Create(input.System);
            
            using (running.System)
            {
                if (!running.RecycledMessage.success)
                {
                    throw new Exception("System startup failed.");
                }

                await running.System.Warmup();

                var specs = await specFetching;

                var runner = buildRunner(input, specs, running, out var executionObserver);

                buildExecutionQueue(runner, executionObserver);

                var requests = createExecutionPlans(specs, running);

                var finished = Task.WhenAll(requests.Select(x => x.Completion));
                var timeout = Task.Delay(input.GlobalTimeoutFlag.Minutes());

                await Task.WhenAny(timeout, finished);

                if (timeout.IsCompleted)
                {
                    showTimeoutMessage(input, requests);
                }

                var records = requests.Select(x => new BatchRecord
                {
                    results = x.Completion.Result,
                    specification = x.Specification
                }).ToArray();

                var results = new BatchRunResponse
                {
                    fixtures = running.Fixtures.Models.ToArray(),

                    suite = "Interactive Execution",
                    system = running.System.GetType().FullName,
                    records = records
                };
                
                var success = determineSuccess(input, results);

                writeResults(input, running.RecycledMessage, results);
                
                writeData(input, results);
                

                if (input.OpenFlag)
                {
                    ProcessLauncher.OpenFile(input.ResultsPathFlag);
                }
                
                writeSuccessOrFailure(success);

                return success;
            }
            
        }
        
        private static void writeData(RunInput input, BatchRunResponse results)
        {
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
            results.suite = input.SpecificationOrSuite ?? "All";
            results.system = systemRecycled.system_name;
            results.time = DateTime.Now.ToString();

            results.fixtures = input.BuildFixturesWithOverrides(systemRecycled);

            var document = BatchResultsWriter.BuildResults(results);
            Console.WriteLine("Writing results to " + input.ResultsPathFlag);
            document.WriteToFile(input.ResultsPathFlag);
        }
        
        private static void showTimeoutMessage(RunInput input, SpecExecutionRequest[] requests)
        {
            foreach (var request in requests)
            {
                request.Cancel();
            }

            ConsoleWriter.Write(ConsoleColor.Red, $"The execution timed out in {input.GlobalTimeoutFlag} minutes");
        }

        private SpecExecutionRequest[] createExecutionPlans(List<Specification> specs, RunningSystem running)
        {
            var nullo = new NulloResultObserver();
            var requests = specs.Select(x => new SpecExecutionRequest(x, nullo)).ToArray();
            foreach (var request in requests)
            {
                request.CreatePlan(running.Fixtures);
                _queue.Enqueue(request);
            }
            return requests;
        }

        private void buildExecutionQueue(SpecRunner runner, IExecutionObserver executionObserver)
        {
            _queue = new ConsumingQueue(request =>
            {
                if (request.IsCancelled)
                {
                    return;
                }

                var results = runner.Execute(request, _queue);

                if (!request.IsCancelled && results != null)
                {
                    // TODO -- combine the two things here?
                    request.SpecExecutionFinished(results);
                    executionObserver.SpecFinished(request);
                }
            });
            
            _queue.Start();
            
        }

        private static SpecRunner buildRunner(RunInput input, List<Specification> specs, RunningSystem running, out IExecutionObserver executionObserver)
        {
            IBatchObserver batchObserver = new NulloBatchObservor();
            executionObserver = new NulloObserver();
            switch (input.TracingFlag)
            {
                case TracingStyle.verbose:
                    batchObserver = new ConsoleBatchObserver(specs.Count);
                    // TODO -- awesome if you could get smarter w/ the console output here
                    break;

                case TracingStyle.teamcity:
                    batchObserver = new TeamCityBatchObserver();
                    executionObserver = new TeamCityExecutionObserver();
                    break;

                case TracingStyle.appveyor:
                    batchObserver = new AppVeyorBatchObserver();
                    break;
            }

            var runner = new SpecRunner(new BatchExecutionMode(batchObserver), running.System, executionObserver);
            runner.UseStopConditions(Project.CurrentProject.StopConditions);
            return runner;
        }
    }
}
