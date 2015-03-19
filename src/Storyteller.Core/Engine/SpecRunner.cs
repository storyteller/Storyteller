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
            var context = request.CreateContext(_stopConditions, execution, timings);
            return Task.Factory.StartNew(() =>
            {
                var plan = request.Plan;
                
                _mode.BeforeRunning(request, context);

                var executor = _mode.BuildExecutor(plan, context);
                plan.AcceptVisitor(executor);

                _mode.AfterRunning(request, context, queue);

                return context;
            }, context.Cancellation);

        }

        public void UseStopConditions(StopConditions conditions)
        {
            _stopConditions = conditions;
        }
    }
}