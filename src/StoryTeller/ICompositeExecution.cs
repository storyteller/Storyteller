namespace StoryTeller
{
    public interface ICompositeExecution : IExecutionStep
    {
        IExecutionStep[] Steps { get; }
    }
}