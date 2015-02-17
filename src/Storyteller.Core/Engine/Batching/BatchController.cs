using System.Collections.Generic;
using System.Linq;
using Storyteller.Core.Model.Persistence;
using Storyteller.Core.Remotes.Messaging;

namespace Storyteller.Core.Engine.Batching
{
    // TODO -- retrofit some UT's
    public class BatchController : IListener<BatchRunRequest>
    {
        private readonly ISpecificationEngine _engine;
        private readonly IBatchObserver _observer;

        public BatchController(ISpecificationEngine engine, IBatchObserver observer)
        {
            _engine = engine;
            _observer = observer;
        }

        public void Receive(BatchRunRequest message)
        {
            var top = HierarchyLoader.ReadHierarchy();
            var nodes = message.Filter(top).ToArray();

            var task = _observer.MonitorBatch(nodes);

            nodes
                .Select(SpecExecutionRequest.For)
                .Each(x => _engine.Enqueue(x));

            task.ContinueWith(t =>
            {
                EventAggregator.SendMessage(new BatchRunResponse { results = t.Result.ToArray() });
            });
        }
    }
}