using System;
using System.Linq;
using Baseline;
using StoryTeller.Engine.Stepthrough;
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
        private readonly ISpecExpiration _specExpiration;
        private StopConditions _stopConditions = new StopConditions();

        public SpecRunner(IExecutionMode mode, ISystem system, ISpecExpiration specExpiration)
        {
            _mode = mode;
            _system = system;
            _specExpiration = specExpiration;

            Status = SpecRunnerStatus.Valid;
        }

        public SpecRunnerStatus Status { get; set; }

        public SpecExecution Current { get; private set; }

        public SpecResults Execute(SpecExecutionRequest request, IConsumingQueue queue)
        {
            _mode.BeforeRunning(request);

            if (Status == SpecRunnerStatus.Invalid)
            {
                var abortedResults = SpecResults.ForAbortedRun(request.Id);
                _mode.AfterRunning(request, abortedResults, queue, Status);

                return abortedResults;
            }

            if (_specExpiration.IsExpired(request.Specification))
            {
                var expiredResults = SpecResults.ForExpiredRun(request.Id);
                _mode.AfterRunning(request, expiredResults, queue, Status);

                return expiredResults;
            }

            request.Plan.Attempts++;

            var timings = request.StartNewTimings();

            SpecResults results = null;

            try
            {
                Current = request.Mode == ExecutionMode.normal
                    ? new SpecExecution(request, _stopConditions, _mode.BuildLogger())
                    : new StepthroughExecution(request, _stopConditions, _mode.Observer());

                results = Current.Execute(_system, timings);
            }
            catch (Exception ex) // Any exception that bubbles up is telling us that the runner is invalid
            {
                MarkAsInvalid(ex);

                results = buildResultsForContextCreationFailure(request, ex, timings);
            }
            finally
            {
                _mode.AfterRunning(request, results, queue, Status);

                timings.Dispose();
            }

            return results;
        }

        public void MarkAsInvalid(Exception ex)
        {
            Status = SpecRunnerStatus.Invalid;

            ConsoleWriter.Write(ConsoleColor.Yellow,
                "Failed to create an execution context. No specifications can be processed until this is addressed");
            ConsoleWriter.Write(ConsoleColor.Red, ex.ToString());
            EventAggregator.SendMessage(new PassthroughMessage(new RuntimeError(ex)));
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
                if (id.IsEmpty() || id == Current.Request.Id)
                {
                    Current.Cancel();
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        public bool IsRunning()
        {
            if (Current == null) return false;
            return (!Current.Finished && !Current.WasCancelled);
        }

        public QueueState RunningState()
        {
            // Empty running state
            if (Current == null) return new QueueState();

            return new QueueState
            {
                running = Current.Request.Id,
                stepthrough = Current.Request.Mode != ExecutionMode.normal
            };
        }

        public void UseStopConditions(StopConditions conditions)
        {
            _stopConditions = conditions;
        }
    }
}