using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Baseline;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Engine.Batching
{
    public class BatchController : IListener<BatchRunRequest>
    {
        private readonly ISystem _system;
        private readonly ISpecificationEngine _engine;
        private readonly IBatchObserver _resultObserver;

        public BatchController(ISystem system, ISpecificationEngine engine, IBatchObserver observer)
        {
            _system = system;
            _engine = engine;
            _resultObserver = observer;
        }

        public void Receive(BatchRunRequest message)
        {
            Suite top = HierarchyLoader.ReadHierarchy(message.SpecPath);
            Specification[] specs = message.Filter(top).ToArray();

            IRunExecutionContext runExecutionContext = _system.CreateRunExecutionContext();

            runExecutionContext?.BeforeRun(specs);
            Task<IEnumerable<BatchRecord>> task = _resultObserver.MonitorBatch(specs);

            specs
                .Select(SpecExecutionRequest.For)
                .Each(x => _engine.Enqueue(x));

            task.ContinueWith(t =>
            {
                BatchRecord[] results = t.Result.ToArray();
                runExecutionContext?.AfterRun(results);
                EventAggregator.SendMessage(new BatchRunResponse
                {
                    records = results
                });
            });
        }
    }
}
