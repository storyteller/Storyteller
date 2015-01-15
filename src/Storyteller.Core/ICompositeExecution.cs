namespace Storyteller.Core
{
    public interface ICompositeExecution : IExecutionStep
    {
        IExecutionStep[] Steps { get; }
    }
}