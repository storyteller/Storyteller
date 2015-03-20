using System;

namespace StoryTeller.Engine
{
    public interface IConsumingQueue : IDisposable
    {
        void Enqueue(SpecExecutionRequest plan);
        void Start();
    }
}