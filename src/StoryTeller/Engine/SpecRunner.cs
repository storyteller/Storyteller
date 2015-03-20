using System;
using System.Linq;
using System.Threading;
using FubuCore;
using FubuCore.CommandLine;
using StoryTeller.Grammars;
using StoryTeller.Messages;
using StoryTeller.Remotes.Messaging;
using StoryTeller.Results;

namespace StoryTeller.Engine
{
    public enum SpecRunnerStatus
    {
        Valid,
        Invalid
    }

    public class SpecRunner : ISpecRunner
    {
        private readonly IExecutionMode _mode;
        private readonly ISystem _system;
        private StopConditions _stopConditions;

        public SpecRunner(IExecutionMode mode, ISystem system)
        {
            _mode = mode;
            _system = system;

            Status = SpecRunnerStatus.Valid;
        }

        public SpecRunnerStatus Status { get; set; }

        public SpecResults Execute(SpecExecutionRequest request, IConsumingQueue queue)
        {
            _mode.BeforeRunning(request);
            if (Status == SpecRunnerStatus.Invalid)
            {
                var abortedResults = SpecResults.ForAbortedRun();
                _mode.AfterRunning(request, abortedResults, queue, Status);
                return abortedResults;
            }


            request.Plan.Attempts++;

            var timings = request.StartNewTimings();
            SpecResults results = null;

            try
            {
                IExecutionContext execution = null;
                using (timings.Subject("Context", "Creation"))
                {
                    execution = _system.CreateContext();
                }

                results = executeSpecification(request, timings, execution);
            }
            catch (Exception ex)
            {
                results = processContextCreationFailure(request, results, ex, timings);
            }
            finally
            {
                _mode.AfterRunning(request, results, queue, Status);
            }

            return results;
        }

        private SpecResults executeSpecification(SpecExecutionRequest request, Timings timings, IExecutionContext execution)
        {
            SpecContext context = null;

            try
            {
                context = new SpecContext(request.Specification, timings, request.Observer, _stopConditions, execution.Services);
                context.Reporting.StartDebugListening();
                var plan = request.Plan;
                var executor = _mode.BuildExecutor(plan, context);

                runWithTimeout(plan, context, executor, _stopConditions.TimeoutInSeconds.Seconds());

                // Only tested through integration testing
                if (context.HadCatastrophicException)
                {
                    Status = SpecRunnerStatus.Invalid;
                }

                return context.FinalizeResults(request.Plan.Attempts);
            }
            finally
            {
                execution.SafeDispose();
                context.SafeDispose();
            }
        }

        private SpecResults processContextCreationFailure(SpecExecutionRequest request, SpecResults results, Exception ex,
            Timings timings)
        {
            results = buildResultsForContextCreationFailure(request, ex, timings);

            Status = SpecRunnerStatus.Invalid;

            ConsoleWriter.Write(ConsoleColor.Yellow,
                "Failed to create an execution context. No specifications can be processed until this is addressed");
            ConsoleWriter.Write(ConsoleColor.Red, ex.ToString());
            EventAggregator.SendMessage(new RuntimeError(ex));
            return results;
        }

        private static SpecResults buildResultsForContextCreationFailure(SpecExecutionRequest request, Exception ex,
            Timings timings)
        {
            var result = new StepResult(request.Specification.id, ex) {position = Stage.context};
            var perf = timings.Finish();

            return new SpecResults
            {
                Attempts = request.Plan.Attempts,
                Duration = timings.Duration,
                Performance = perf.ToArray(),
                Counts = new Counts(0, 0, 1, 0),
                Results = new IResultMessage[]
                {
                    result
                }
            };
        }

        private static void runWithTimeout(SpecificationPlan plan, ISpecContext context, IStepExecutor executor, TimeSpan timeout)
        {
            var reset = new ManualResetEvent(false);

            var thread = new Thread(() =>
            {
                try
                {
                    plan.AcceptVisitor(executor);
                    reset.Set();
                }
                catch (ThreadAbortException)
                {
                    // Do nothing here, you catch this down below
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                }
            });

            thread.Name = "StoryTeller-Test-Execution";
            thread.Start();

            var timedout = !reset.WaitOne(timeout);
            if (timedout)
            {
                context.LogResult(new StepResult
                {
                    id = plan.Specification.id,
                    Status = ResultStatus.error,
                    error = "Timed out in " + context.Timings.Duration,
                    position = Stage.timedout
                });
            }


        }


        public void UseStopConditions(StopConditions conditions)
        {
            _stopConditions = conditions;
        }
    }


}