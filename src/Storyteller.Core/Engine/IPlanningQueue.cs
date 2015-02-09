using System;
using Storyteller.Core.Model;

namespace Storyteller.Core.Engine
{
    public interface IPlanningQueue : IDisposable
    {
        void Enqueue(Specification spec);
    }
}