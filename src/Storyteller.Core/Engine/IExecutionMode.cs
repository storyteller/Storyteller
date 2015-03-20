using Storyteller.Core.Grammars;

namespace Storyteller.Core.Engine
{
    public interface IExecutionMode
    {
        IStepExecutor BuildExecutor(SpecificationPlan plan, ISpecContext context);
        void BeforeRunning(SpecExecutionRequest request);
        void AfterRunning(SpecExecutionRequest request, SpecResults results, IConsumingQueue queue, SpecRunnerStatus status);
    }
}