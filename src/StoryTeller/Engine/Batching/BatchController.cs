using System;
using System.Collections.Generic;
using System.Linq;
using Baseline;
using StoryTeller.Model.Persistence;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Engine.Batching
{
    public class BatchController : IListener<BatchRunRequest>
    {
        private readonly ISpecificationEngine _engine;
        private readonly IBatchObserver _resultObserver;

        public BatchController(ISpecificationEngine engine, IBatchObserver observer)
        {
            _engine = engine;
            _resultObserver = observer;
        }

        public void Receive(BatchRunRequest message)
        {
            var top = HierarchyLoader.ReadHierarchy(message.SpecPath);
            var specs = message.Filter(top).ToArray();

            var task = _resultObserver.MonitorBatch(specs);

            specs
                .Select(SpecExecutionRequest.For)
                .Each(x => _engine.Enqueue(x));

            task.ContinueWith(t =>
            {
                EventAggregator.SendMessage(new BatchRunResponse
                {
                    records = t.Result.ToArray()
                });
            });
        }
    }
}
