using System;

namespace Storyteller.Core.Engine
{
    public interface IReaderQueue : IDisposable
    {
        void Enqueue(SpecExecutionRequest request);
        void Start();
    }
}