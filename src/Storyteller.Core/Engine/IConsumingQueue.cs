using System;

namespace Storyteller.Core.Engine
{
    public interface IConsumingQueue : IDisposable
    {
        void Enqueue(SpecExecutionRequest plan);
        void Start();
    }
}