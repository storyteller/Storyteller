using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Baseline;
using StoryTeller.Grammars;
using StoryTeller.Results;

namespace StoryTeller.Engine
{
    public enum ExecutionMode
    {
        normal,
        stepthrough,
        breakpoint
    }

    public interface IExecutionLogger
    {
        void Starting(IList<ILineExecution> all);

        void LineComplete(ISpecContext context, ILineExecution line);
    }

    public class NulloExecutionLogger : IExecutionLogger
    {
        public void Starting(IList<ILineExecution> all)
        {
            // nothing
        }

        public void LineComplete(ISpecContext context, ILineExecution line)
        {
            // nothing
        }
    }

    public class SpecExecution
    {
        public static void RunAll(SpecContext context, SpecificationPlan plan)
        {
            var gatherer = new LineStepGatherer(context);
            plan.AcceptVisitor(gatherer);

            foreach (var line in gatherer.Lines)
            {
                if (!context.CanContinue()) break;

                line.Execute(context);
            }
        }

        private Task _timeout;

        public SpecExecution(SpecExecutionRequest request, StopConditions stopConditions, IExecutionLogger logger)
        {
            Request = request;
            StopConditions = stopConditions;
            Logger = logger;
            Mode = request.Mode;
        }

        public StopConditions StopConditions { get; }

        public IExecutionLogger Logger { get; }

        public SpecExecutionRequest Request { get; }

        public ExecutionMode Mode { get; protected set; } = ExecutionMode.normal;

        // If this fails, it's a catastrophic exception
        public SpecResults Execute(ISystem system, Timings timings)
        {


            _timeout = setupTimeout();

            using (var execution = createExecutionContext(system, timings))
            {
                if (Request.IsCancelled)
                {
                    return null;
                }

                using (var context = new SpecContext(
                    Request.Specification,
                    timings,
                    Request.Observer,
                    StopConditions,
                    execution))
                {
                    if (Request.Specification.HasNoSteps())
                    {
                        context.LogException(Request.Specification.id, new NotImplementedException("Empty specification with no implementation"), Stage.context);
                    }

                    beforeExecution(execution, context);

                    var lines = determineLineSteps(context);

                    startDebugListening(context);

                    Logger.Starting(lines);

                    if (lines.Any())
                    {
                        var stepRunning = executeSteps(context, lines, Request.Cancellation);

                        Task.WaitAny(stepRunning, _timeout);
                    }

                    execution.AfterExecution(context);

                    return buildResults(context, timings);
                }
            }
        }

        protected virtual Task setupTimeout()
        {
            return Task.Delay(StopConditions.TimeoutInSeconds.Seconds());
        }

        private SpecResults buildResults(SpecContext context, Timings timings )
        {
            if (Request.IsCancelled) return null;

            var catastrophic = context?.CatastrophicException;
            if (catastrophic != null)
            {
                throw new StorytellerExecutionException(catastrophic);
            }

            Finished = !_timeout.IsCompleted && !Request.IsCancelled;

            if (_timeout.IsCompleted && !Request.IsCancelled)
            {
                var result = timeoutMessage(timings);

                if (context == null)
                {
                    var perf = timings.Finish();

                    return new SpecResults
                    {
                        Counts = new Counts(0, 0, 1, 0),
                        Duration = timings.Duration,
                        Performance = perf.ToArray(),
                        Attempts = Request.Plan.Attempts,
                        Results = new IResultMessage[] { result },
                        WasAborted = false
                    };
                }


                context.LogResult(result);
                context.Cancel();
            }

            return context.FinalizeResults(Request.Plan.Attempts);
        }

        private StepResult timeoutMessage(Timings timings)
        {
            return new StepResult
            {
                id = Request.Plan.Specification.id,
                status = ResultStatus.error,
                error = "Timed out in " + timings.Duration + " milliseconds",
                position = Stage.timedout
            };
        }

        private static void startDebugListening(SpecContext context)
        {
            context.Reporting.As<Reporting>().StartDebugListening();
        }

        private void beforeExecution(IExecutionContext execution, SpecContext context)
        {
            try
            {
                execution.BeforeExecution(context);
            }
            catch (Exception e)
            {
                context.LogException(Request.Id, e, "BeforeExecution");
            }
        }

        protected virtual Task executeSteps(SpecContext context, IList<ILineExecution> lines, CancellationToken token)
        {
            return Task.Factory.StartNew(() =>
            {
                foreach (var line in lines)
                {
                    if (shouldStop(context))
                    {
                        return;
                    }

                    execute(context, line).Wait(StopConditions.TimeoutInSeconds.Seconds());

                    Logger.LineComplete(context, line);
                }
            }, token);
        }

        protected bool shouldStop(SpecContext context)
        {
            return Request.IsCancelled || !context.CanContinue() || _timeout.IsCompleted;
        }


        private IList<ILineExecution> determineLineSteps(SpecContext context)
        {
            var gatherer = new LineStepGatherer(context);
            Request.Plan.AcceptVisitor(gatherer);

            return gatherer.Lines;
        }

        private IExecutionContext createExecutionContext(ISystem system, Timings timings)
        {
            var record = timings.Subject("Context", "Creation", 0);

            try
            {
                return system.CreateContext();
            }
            catch (Exception e)
            {
                Request.Cancel();

                throw new StorytellerExecutionException(e);
            }
            finally
            {
                timings.End(record);
            }
        }

        private Task execute(SpecContext context, ILineExecution line)
        {
            var running = line.ExecuteAsync(context, Request.Cancellation);
            return Task.WhenAny(running, _timeout);
        }


        public virtual void Cancel()
        {
            Request.Cancel();
        }
        
        public bool WasCancelled => Request.IsCancelled;

        public bool Finished { get; private set; }
    }
}