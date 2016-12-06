using StoryTeller.Messages;

namespace StoryTeller.Engine.UserInterface
{
    public class UserInterfaceExecutionMode : IExecutionMode
    {
        public UserInterfaceExecutionMode(IUserInterfaceObserver observer)
        {
            Observer = observer;
        }

        public void BeforeRunning(SpecExecutionRequest request)
        {
            var total = request.Plan.Count();
            var starting = new SpecProgress(request.Id, new Counts(), 0, total);
            Observer.SendProgress(starting);
        }

        public void AfterRunning(SpecExecutionRequest request, SpecResults results, IConsumingQueue queue, SpecRunnerStatus status)
        {
            
        }

        public IUserInterfaceObserver Observer { get; }

        public IExecutionLogger BuildLogger()
        {
            return new InstrumentedLogger(Observer);
        }

        IUserInterfaceObserver IExecutionMode.Observer()
        {
            return Observer;
        }
    }
}