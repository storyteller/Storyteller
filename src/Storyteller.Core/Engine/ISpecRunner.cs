using System.Threading.Tasks;
using Storyteller.Core.Grammars;

namespace Storyteller.Core.Engine
{
    public interface ISpecRunner
    {
        Task<ISpecContext> Execute(SpecExecutionRequest request, IConsumingQueue queue);
        void UseStopConditions(StopConditions conditions);
    }
}