using System;

namespace Storyteller.Core.Engine
{
    public interface IPlanningQueue : IDisposable
    {
        void Enqueue(SpecExecutionRequest request);
    }
}