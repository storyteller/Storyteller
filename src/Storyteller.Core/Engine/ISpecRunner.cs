using System.Threading.Tasks;

namespace Storyteller.Core.Engine
{
    public interface ISpecRunner
    {
        SpecResults Execute(SpecExecutionRequest request, IConsumingQueue queue);
        void UseStopConditions(StopConditions conditions);
    }
}