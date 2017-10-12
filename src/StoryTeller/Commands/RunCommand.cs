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
using StoryTeller.Model.Persistence;
using StoryTeller.Model.Persistence.DSL;
using StoryTeller.Remotes;
using StoryTeller.Results;
using StoryTeller.Util;

namespace StoryTeller.Commands
{
    public class RunInput : StorytellerInput
    {
        public string SpecificationOrSuite { get; set; }
        
        [Description("Optional. Only runs tests with desired lifecyle")]
        public Lifecycle LifecycleFlag { get; set; } = Lifecycle.Any;

        [Description("Choose")]
        public TracingStyle TracingFlag { get; set; } = TracingStyle.None;


        [Description("Global timeout for this command in minutes. Defaults to 10")]
        public int TimeoutFlag { get; set; } = 10;
        
        [Description("Open the results in a browser after the run. DO NOT DO THIS IN CI!")]
        public bool OpenFlag { get; set; }
        
        
        [Description("Path to write out the results. Default is stresults.htm")]
        public string ResultsPathFlag { get; set; } = "stresults.htm";
        
        [Description("Optional. Override the fixtures directory")]
        [FlagAlias("fixtures", 'f')]
        public string FixturesFlag { get; set; }

        public string FixturePath
        {
            get
            {
                if (FixturesFlag.IsNotEmpty())
                {
                    return FixturesFlag.ToFullPath();
                }

                return FixtureLoader.SelectFixturePath(Path.ToFullPath());
            }
        }
        
        // TODO -- put stop conditions here too
        // TODO -- profile
        // TODO -- props!
        // TODO -- flag to open the results in the browser afterward

        public Task<List<Specification>> ReadSpecs()
        {
            return Task.Factory.StartNew(() =>
            {
                var top = HierarchyLoader.ReadHierarchy(SpecPath);
                // TODO -- filter on tags here
                // TODO -- make HierarchyLoader smart enough to recognize spec or suite
                return HierarchyLoader.Filter(top, LifecycleFlag, SpecificationOrSuite, new string[0]).ToList();
            });
        }
    }
    
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
            bool success = false;
            
            try
            {
                var task = execute(input);
                task.Wait(input.TimeoutFlag.Minutes());

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
                var timeout = Task.Delay(input.TimeoutFlag.Minutes());

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

                    // TODO -- do something better here
                    suite = "Interactive Execution",
                    system = running.System.GetType().FullName,
                    records = records
                };
                
                var success = determineSuccess(input, results);

                writeResults(input, running.RecycledMessage, results);
                

                if (input.OpenFlag)
                {
                    ProcessLauncher.OpenFile(input.ResultsPathFlag);
                }
                
                writeSuccessOrFailure(success);

                return success;
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
            results.suite = input.SpecificationOrSuite ?? "All";
            results.system = systemRecycled.system_name;
            results.time = DateTime.Now.ToString();

            results.fixtures = buildFixturesWithOverrides(input, systemRecycled);

            var document = BatchResultsWriter.BuildResults(results);
            Console.WriteLine("Writing results to " + input.ResultsPathFlag);
            document.WriteToFile(input.ResultsPathFlag);
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

        private static void showTimeoutMessage(RunInput input, SpecExecutionRequest[] requests)
        {
            foreach (var request in requests)
            {
                request.Cancel();
            }

            ConsoleWriter.Write(ConsoleColor.Red, $"The execution timed out in {input.TimeoutFlag} minutes");
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
            IBatchObserver batchObserver = new BatchObserver();
            executionObserver = new NulloObserver();
            switch (input.TracingFlag)
            {
                case TracingStyle.Verbose:
                    batchObserver = new ConsoleBatchObserver(specs.Count);
                    // TODO -- awesome if you could get smarter w/ the console output here
                    break;

                case TracingStyle.TeamCity:
                    batchObserver = new TeamCityBatchObserver(batchObserver);
                    executionObserver = new TeamCityExecutionObserver();
                    break;

                case TracingStyle.AppVeyor:
                    batchObserver = new AppVeyorBatchObserver(batchObserver);
                    break;
            }

            return new SpecRunner(new BatchExecutionMode(batchObserver), running.System, executionObserver);
        }
    }
}
