using System.Collections.Generic;
using System.Threading.Tasks;
using Storyteller.Core.Engine;
using Storyteller.Core.Grammars;
using Storyteller.Core.Model.Persistence;

namespace Storyteller.Core
{
    public interface IBatchObserver 
    {
        void SpecRequeued(SpecExecutionRequest request);
        void SpecHandled(SpecExecutionRequest request, SpecResults results);

        Task<IEnumerable<BatchRecord>> MonitorBatch(IEnumerable<SpecNode> nodes);
    }
}