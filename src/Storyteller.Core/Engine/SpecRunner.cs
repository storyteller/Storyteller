using System.Threading.Tasks;

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

            return execute(request, queue, context, execution);
        }

        private SpecResults execute(SpecExecutionRequest request, IConsumingQueue queue, ISpecContext context, IExecutionContext execution)
        {
            try
            {
                var plan = request.Plan;

                _mode.BeforeRunning(request, context);

                var executor = _mode.BuildExecutor(plan, context);
                plan.AcceptVisitor(executor);

                

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

        public void UseStopConditions(StopConditions conditions)
        {
            _stopConditions = conditions;
        }
    }
}