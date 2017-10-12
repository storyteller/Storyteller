using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Baseline.Dates;
using Oakton;
using StoryTeller.Engine;
using StoryTeller.Engine.Batching;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
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
            try
            {
                var task = execute(input);
                task.Wait(input.TimeoutFlag.Minutes());

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


            return true;
        }
        
        

        private async Task execute(RunInput input)
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


                var document = buildResultsDocument(requests, running);
                Console.WriteLine("Writing results to " + input.ResultsPathFlag);
                document.WriteToFile(input.ResultsPathFlag);
                
                if (input.OpenFlag)
                {
                    ProcessLauncher.OpenFile(input.ResultsPathFlag);
                }
            }
            
        }

        private static HtmlDocument buildResultsDocument(SpecExecutionRequest[] requests, RunningSystem running)
        {
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

            return BatchResultsWriter.BuildResults(results);
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
