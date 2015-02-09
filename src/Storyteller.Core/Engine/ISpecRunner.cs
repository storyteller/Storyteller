using System.Threading.Tasks;
using Storyteller.Core.Grammars;

namespace Storyteller.Core.Engine
{
    public interface ISpecRunner
    {
        Task<ISpecContext> Execute(SpecificationPlan plan, IExecutionContext execution, IExecutionQueue queue);
        void UseStopConditions(StopConditions conditions);
    }
}