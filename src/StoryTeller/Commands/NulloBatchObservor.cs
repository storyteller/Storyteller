using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using StoryTeller.Engine;
using StoryTeller.Model;

namespace StoryTeller.Commands
{
    public class NulloBatchObservor : IBatchObserver
    {
        public void SpecRequeued(SpecExecutionRequest request)
        {
        }

        public void SpecHandled(SpecExecutionRequest request, SpecResults results)
        {
        }

        public Task<IEnumerable<BatchRecord>> MonitorBatch(IEnumerable<Specification> specs)
        {
            return Task.FromResult(Enumerable.Empty<BatchRecord>());
        }
    }
}