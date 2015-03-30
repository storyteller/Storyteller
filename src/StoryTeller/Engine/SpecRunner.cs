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
        private readonly ReaderWriterLockSlim _executionLock = new ReaderWriterLockSlim();
        private ExecutionRun _current;

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

                if (request.IsCancelled) return null;

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

                _current = new ExecutionRun(plan, context, executor, _stopConditions.TimeoutInSeconds.Seconds());
                _current.Start();

                if (_current.WasCancelled)
                {
                    request.Cancel();
                }

                // Only tested through integration testing
                if (context.HadCatastrophicException)
                {
                    Status = SpecRunnerStatus.Invalid;
                }

                if (!_current.WasCancelled)
                {
                    // Hook mostly for logging
                    execution.AfterExecution(context);
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



        public void Cancel(string id = null)
        {
            try
            {
                if (!IsRunning()) return;
                if (id.IsEmpty() || id == _current.Plan.Specification.id)
                {
                    _current.Cancel();
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        public bool IsRunning()
        {
            if (_current == null) return false;
            return (!_current.Finished && !_current.WasCancelled);
        }

        public string RunningSpecId()
        {
            return IsRunning() ? _current.Plan.Specification.id : null;
        }

        public void UseStopConditions(StopConditions conditions)
        {
            _stopConditions = conditions;
        }
    }


}