using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Web.ModelBinding;
using FubuCore;
using Storyteller.Core.Grammars;
using Storyteller.Core.Results;

namespace Storyteller.Core.Engine
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

        public SpecRunnerStatus Status { get; private set; }

        public SpecResults Execute(SpecExecutionRequest request, IConsumingQueue queue)
        {
            _mode.BeforeRunning(request);

            request.Plan.Attempts++;

            var timings = request.StartNewTimings();
            IExecutionContext execution = null;
            SpecResults results = null;

            try
            {
                using (timings.Subject("Context", "Creation"))
                {
                    execution = _system.CreateContext();
                }

                var context = new SpecContext(request.Specification, timings, request.Observer, _stopConditions, execution.Services);
                context.Reporting.StartDebugListening();

                try
                {
                    results = CreateResults(request, context, _stopConditions.TimeoutInSeconds.Seconds());
                }
                finally
                {
                    execution.Dispose();
                    ((ISpecContext)context).Dispose();
                }

            }
            catch (Exception ex)
            {
                var result = new StepResult(request.Specification.Id, ex) {position = Stage.context};
                var perf = timings.Finish();

                results = new SpecResults
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

                Status = SpecRunnerStatus.Invalid;
                
            }
            finally
            {
                _mode.AfterRunning(request, results, queue);
            }

            return results;
        }

        public SpecResults CreateResults(SpecExecutionRequest request, ISpecContext context, TimeSpan timeout)
        {
            var plan = request.Plan;
            var executor = _mode.BuildExecutor(plan, context);

            runWithTimeout(plan, context, executor, timeout);

            var results = context.FinalizeResults(request.Plan.Attempts);

            return results;
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
                    id = plan.Specification.Id,
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