using System;

namespace Storyteller.Core.Engine
{
    public interface IExecutionQueue : IDisposable
    {
        void Enqueue(SpecExecutionRequest plan);
        void Start();
    }
}