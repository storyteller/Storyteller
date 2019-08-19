using StoryTeller.Results;

namespace StoryTeller.NewEngine
{
    public interface ISpecificationObserver
    {
        // Make a separate one for stepthrough vs batch vs UI
        
        void Starting(ExecutionPlan plan);

        void Completed(ExecutionPlan plan, LineExecution line, StepResult result);
        void Finished(ExecutionPlan plan, SpecResults specResults);
    }
}