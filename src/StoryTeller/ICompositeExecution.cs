using System;

namespace StoryTeller
{
    [Obsolete("Goes away in v6")]
    public interface ICompositeExecution : IExecutionStep
    {
        IExecutionStep[] Steps { get; }
    }
}
