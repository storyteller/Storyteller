using System;
using System.Threading;
using System.Threading.Tasks;
using FubuCore;
using Storyteller.Core.Grammars;
using Storyteller.Core.Results;

namespace Storyteller.Core.Engine
{
    public class SpecRunner : ISpecRunner
    {
        private readonly IExecutionMode _mode;
        private readonly ISystem _system;
        private StopConditions _stopConditions;

        public SpecRunner(IExecutionMode mode, ISystem system)
        {
            _mode = mode;
            _system = system;
        }

        public SpecResults Execute(SpecExecutionRequest request, IConsumingQueue queue)
        {
            var timings = request.StartNewTimings();
            IExecutionContext execution = null;


            // TODO -- tag the context or plan if timed out?
            // TODO -- throw a CatastrophicException if the system creation fails
            using (timings.Subject("Context", "Creation"))
            {
                execution = _system.CreateContext();

                // TODO -- log a catastrophic error here and get out.
            }

            var context = new SpecContext(request.Specification, timings, request.Observer, _stopConditions, execution.Services);

            context.Reporting.StartDebugListening();

            return execute(request, queue, context, execution, _stopConditions.TimeoutInSeconds.Seconds());
        }

        private SpecResults execute(SpecExecutionRequest request, IConsumingQueue queue, ISpecContext context, IExecutionContext execution, TimeSpan timeout)
        {
            try
            {
                var plan = request.Plan;
                plan.Attempts++;

                _mode.BeforeRunning(request, context);

                var executor = _mode.BuildExecutor(plan, context);


                runWithTimeout(plan, context, executor, timeout);

                var results = context.FinalizeResults(request.Plan.Attempts);
                _mode.AfterRunning(request, results, queue);

                return results;
            }
            finally
            {
                execution.Dispose();
                context.Dispose();
            }
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