using System;
using System.Collections.Generic;
using Storyteller.Core.Model.Persistence;

namespace Storyteller.Core.Engine
{
    public interface IReaderQueue : IDisposable
    {
        void Enqueue(SpecNode node);
        void Enqueue(IEnumerable<SpecNode> nodes);
        void Start();
    }
}