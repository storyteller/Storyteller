using System.Linq;
using Storyteller.Core.Model.Persistence;
using Storyteller.Core.Remotes.Messaging;

namespace Storyteller.Core.Engine.Batching
{
    public class BatchController : IListener<BatchRunRequest>
    {
        private readonly SpecificationEngine _engine;

        public BatchController(SpecificationEngine engine)
        {
            _engine = engine;
        }

        public void Receive(BatchRunRequest message)
        {
            var top = HierarchyLoader.ReadHierarchy();
            var nodes = message.Filter(top);

            _engine.RunBatch(nodes).ContinueWith(t =>
            {
                EventAggregator.SendMessage(new BatchRunResponse { results = t.Result.ToArray() });
            });
        }
    }
}