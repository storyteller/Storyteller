using System.Collections.Generic;
using System.Threading.Tasks;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;

namespace StoryTeller
{
    public interface IBatchObserver 
    {
        void SpecRequeued(SpecExecutionRequest request);
        void SpecHandled(SpecExecutionRequest request, SpecResults results);

        Task<IEnumerable<BatchRecord>> MonitorBatch(IEnumerable<Specification> nodes);
    }
}