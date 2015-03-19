using System.Threading.Tasks;

namespace Storyteller.Core.Engine
{
    public class SpecRunner : ISpecRunner
    {
        private readonly IExecutionMode _mode;
        private StopConditions _stopConditions;

        public SpecRunner(IExecutionMode mode)
        {
            _mode = mode;
        }


        public Task<ISpecContext> Execute(SpecExecutionRequest request, IExecutionContext execution, IConsumingQueue queue, Timings timings)
        {
            var context = new SpecContext(request.Specification, timings, request.Observer, _stopConditions, execution.Services);

            context.Reporting.StartDebugListening();

            return Task.Factory.StartNew<ISpecContext>(() =>
            {
                var plan = request.Plan;
                
                _mode.BeforeRunning(request, context);

                var executor = _mode.BuildExecutor(plan, context);
                plan.AcceptVisitor(executor);

                _mode.AfterRunning(request, context, queue);

                context.Dispose();

                return context;
            }, context.Cancellation);

        }

        public void UseStopConditions(StopConditions conditions)
        {
            _stopConditions = conditions;
        }
    }
}