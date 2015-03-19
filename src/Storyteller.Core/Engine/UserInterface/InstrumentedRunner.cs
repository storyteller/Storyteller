using System.Threading.Tasks;
using Storyteller.Core.Grammars;

namespace Storyteller.Core.Engine.UserInterface
{
    public abstract class SpecRunnerBase : ISpecRunner
    {
        private StopConditions _stopConditions;

        public abstract IStepExecutor BuildExecutor(SpecificationPlan plan, ISpecContext context);



        public Task<ISpecContext> Execute(SpecExecutionRequest request, IExecutionContext execution, IConsumingQueue queue, Timings timings)
        {
            var context = request.CreateContext(_stopConditions, execution, timings);
            return Task.Factory.StartNew(() =>
            {
                var plan = request.Plan;
                
                BeforeRunning(request, context);

                var executor = BuildExecutor(plan, context);
                plan.AcceptVisitor(executor);

                AfterRunning(request, context, queue);

                return context;
            }, context.Cancellation);

        }

        public abstract void BeforeRunning(SpecExecutionRequest request, ISpecContext context);
        public abstract void AfterRunning(SpecExecutionRequest request, ISpecContext context, IConsumingQueue queue);

        public void UseStopConditions(StopConditions conditions)
        {
            _stopConditions = conditions;
        }
    }

    public class InstrumentedRunner : SpecRunnerBase
    {
        private readonly IUserInterfaceObserver _observer;

        public InstrumentedRunner(IUserInterfaceObserver observer)
        {
            _observer = observer;
        }

        public override void BeforeRunning(SpecExecutionRequest request, ISpecContext context)
        {
            _observer.SpecStarted(request.Plan);
        }

        public override void AfterRunning(SpecExecutionRequest request, ISpecContext context, IConsumingQueue queue)
        {
            
        }

        public override IStepExecutor BuildExecutor(SpecificationPlan plan, ISpecContext context)
        {
            return new InstrumentedExecutor(context, plan, _observer);
        }

    }
}