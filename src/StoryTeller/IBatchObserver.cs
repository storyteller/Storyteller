using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using StoryTeller.Engine;
using StoryTeller.Model;

namespace StoryTeller
{
    public interface IBatchObserver 
    {
        void SpecRequeued(SpecExecutionRequest request);
        void SpecHandled(SpecExecutionRequest request, SpecResults results);

        [Obsolete("See if you can eliminate this one")]
        Task<IEnumerable<BatchRecord>> MonitorBatch(IEnumerable<Specification> specs);
    }
}