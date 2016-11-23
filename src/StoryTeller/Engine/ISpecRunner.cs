using System;

namespace StoryTeller.Engine
{
    public interface ISpecRunner
    {
        SpecResults Execute(SpecExecutionRequest request, IConsumingQueue queue);
        void UseStopConditions(StopConditions conditions);
        void Cancel(string id = null);
        bool IsRunning();
        string RunningSpecId();
        void MarkAsInvalid(Exception ex);
        SpecExecution Current { get; }
    }
}