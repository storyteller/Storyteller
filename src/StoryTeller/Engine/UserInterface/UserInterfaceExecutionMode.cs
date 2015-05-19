using StoryTeller.Grammars;

namespace StoryTeller.Engine.UserInterface
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
        }

        public void AfterRunning(SpecExecutionRequest request, SpecResults results, IConsumingQueue queue, SpecRunnerStatus status)
        {
            
        }

        public IStepExecutor BuildExecutor(SpecificationPlan plan, SpecContext context)
        {
            return new InstrumentedExecutor(context, plan, _observer);
        }

    }
}