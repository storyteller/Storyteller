using System;
using StoryTeller.Messages;

namespace StoryTeller.Engine
{
    public interface ISpecRunner
    {
        SpecResults Execute(SpecExecutionRequest request, IConsumingQueue queue);
        void UseStopConditions(StopConditions conditions);
        void Cancel(string id = null);
        bool IsRunning();

        QueueState RunningState();

        void MarkAsInvalid(Exception ex);
        SpecExecution Current { get; }
    }
}