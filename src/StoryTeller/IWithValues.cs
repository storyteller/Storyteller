using StoryTeller.Conversion;

namespace StoryTeller
{
    public interface IWithValues : IExecutionStep
    {
        StepValues Values { get; }
    }
}