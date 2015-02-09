using System;
using Storyteller.Core.Grammars;

namespace Storyteller.Core.Engine
{
    public interface IExecutionQueue : IDisposable
    {
        void Enqueue(SpecificationPlan plan);
        void Start();
    }
}