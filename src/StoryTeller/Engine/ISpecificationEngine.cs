using StoryTeller.Engine.Stepthrough;

namespace StoryTeller.Engine
{
    public interface ISpecificationEngine
    {
        void Enqueue(SpecExecutionRequest request);
        void CancelRunningSpec(string id);

        IStepthroughExecution CurrentStepthrough();
    }
}