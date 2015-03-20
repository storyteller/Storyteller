using StoryTeller.Engine;

namespace StoryTeller
{
    public interface IExecutionStep
    {
        int Count();
        void AcceptVisitor(IStepExecutor executor);
    }
}