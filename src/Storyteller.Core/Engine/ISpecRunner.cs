using System.Threading.Tasks;

namespace Storyteller.Core.Engine
{
    public interface ISpecRunner
    {
        Task<SpecResults> Execute(SpecExecutionRequest request, IConsumingQueue queue);
        void UseStopConditions(StopConditions conditions);
    }
}