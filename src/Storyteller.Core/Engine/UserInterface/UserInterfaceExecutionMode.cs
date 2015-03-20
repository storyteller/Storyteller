using Storyteller.Core.Grammars;

namespace Storyteller.Core.Engine.UserInterface
{
    public class UserInterfaceExecutionMode : IExecutionMode
    {
        private readonly IUserInterfaceObserver _observer;

        public UserInterfaceExecutionMode(IUserInterfaceObserver observer)
        {
            _observer = observer;
        }

        public void BeforeRunning(SpecExecutionRequest request)
        {
            _observer.SpecStarted(request.Plan);
        }

        public void AfterRunning(SpecExecutionRequest request, SpecResults results, IConsumingQueue queue)
        {
            
        }

        public IStepExecutor BuildExecutor(SpecificationPlan plan, ISpecContext context)
        {
            return new InstrumentedExecutor(context, plan, _observer);
        }

    }
}