using Storyteller.Core.Grammars;

namespace Storyteller.Core.Engine
{
    public interface IExecutionMode
    {
        IStepExecutor BuildExecutor(SpecificationPlan plan, ISpecContext context);
        void BeforeRunning(SpecExecutionRequest request, ISpecContext context);
        void AfterRunning(SpecExecutionRequest request, ISpecContext context, IConsumingQueue queue);
    }
}