using Storyteller.Core.Conversion;

namespace Storyteller.Core
{
    public interface IWithValues : IExecutionStep
    {
        StepValues Values { get; }
    }
}