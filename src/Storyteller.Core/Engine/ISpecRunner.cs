using System.Threading.Tasks;
using Storyteller.Core.Grammars;

namespace Storyteller.Core.Engine
{
    public interface ISpecRunner
    {
        IStepExecutor BuildExecutor(SpecificationPlan plan, ISpecContext context);

        Task<ISpecContext> Execute(SpecExecutionRequest request, IExecutionContext execution, IConsumingQueue queue, Timings timings);
        void UseStopConditions(StopConditions conditions);
    }
}