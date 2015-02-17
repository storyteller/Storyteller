using System.Threading.Tasks;

namespace Storyteller.Core.Engine
{
    public interface ISpecRunner
    {
        Task<ISpecContext> Execute(SpecExecutionRequest request, IExecutionContext execution, IConsumingQueue queue);
        void UseStopConditions(StopConditions conditions);
    }
}