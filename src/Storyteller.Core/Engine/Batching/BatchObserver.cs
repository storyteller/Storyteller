using System.Collections.Generic;
using System.Threading.Tasks;
using Storyteller.Core.Grammars;
using Storyteller.Core.Model.Persistence;
using Storyteller.Core.Results;

namespace Storyteller.Core.Engine.Batching
{
    public class BatchObserver : IBatchObserver
    {
        private readonly IList<BatchWatcher> _watchers = new List<BatchWatcher>(); 


        public void Handle<T>(T message) where T : IResultMessage
        {
            // Nothing
        }

        public void SpecRequeued(SpecificationPlan plan, ISpecContext context)
        {
            // TODO -- more instrumentation here
        }


        public void SpecHandled(SpecificationPlan plan, ISpecContext context)
        {
            _watchers.Each(x => x.SpecHandled(plan, context));
            _watchers.RemoveAll(x => x.IsCompleted());
        }

        public Task<IEnumerable<SpecResult>> MonitorBatch(IEnumerable<SpecNode> nodes)
        {
            var watcher = new BatchWatcher(nodes);
            _watchers.Add(watcher);

            return watcher.Task;
        }

    }
}