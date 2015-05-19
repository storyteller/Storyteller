using StoryTeller.Grammars;

namespace StoryTeller.Engine
{
    public interface IExecutionMode
    {
        IStepExecutor BuildExecutor(SpecificationPlan plan, SpecContext context);
        void BeforeRunning(SpecExecutionRequest request);
        void AfterRunning(SpecExecutionRequest request, SpecResults results, IConsumingQueue queue, SpecRunnerStatus status);
    }
}