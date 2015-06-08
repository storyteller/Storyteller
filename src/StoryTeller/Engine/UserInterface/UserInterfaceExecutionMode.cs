using StoryTeller.Grammars;
using StoryTeller.Messages;

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
            var total = request.Plan.Count();
            var starting = new SpecProgress(request.Id, new Counts(), 0, total);
            _observer.SendProgress(starting);
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