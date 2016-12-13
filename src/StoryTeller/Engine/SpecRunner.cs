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
        private readonly IExecutionObserver _observer;
        private StopConditions _stopConditions = new StopConditions();

        public SpecRunner(IExecutionMode mode, ISystem system, IExecutionObserver observer)
        {
            _mode = mode;
            _system = system;
            _observer = observer;

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

            request.Plan.Attempts++;

            var timings = request.StartNewTimings();

            SpecResults results = null;

            try
            {
                Current = request.Mode == ExecutionMode.normal
                    ? new SpecExecution(request, _stopConditions, _mode.BuildLogger())
                    : new StepthroughExecution(request, _stopConditions, _mode.Observer(), _observer);

                _observer.SpecStarted(request);

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
            if (!IsRunning()) return new QueueState();

            var state = new QueueState
            {
                running = Current.Request.Id,
                Mode = Current.Mode
            };

            if (Current is StepthroughExecution)
            {
                state.Stepthrough = Current
                    .As<StepthroughExecution>()
                    .State();
            }

            return state;
        }

        public void UseStopConditions(StopConditions conditions)
        {
            _stopConditions = conditions;
        }
    }
}