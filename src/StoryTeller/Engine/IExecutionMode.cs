using StoryTeller.Engine.UserInterface;

namespace StoryTeller.Engine
{
    public interface IExecutionMode
    {
        void BeforeRunning(SpecExecutionRequest request);

        void AfterRunning(SpecExecutionRequest request, SpecResults results, IConsumingQueue queue,
            SpecRunnerStatus status);

        IExecutionLogger BuildLogger();
        IUserInterfaceObserver Observer();
    }
}