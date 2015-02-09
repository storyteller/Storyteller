using System.Collections.Generic;
using System.Threading.Tasks;
using Storyteller.Core.Grammars;
using Storyteller.Core.Model.Persistence;
using Storyteller.Core.Results;

namespace Storyteller.Core.Engine
{
    public class BatchObserver : IObserver
    {
        private readonly IList<BatchWatcher> _watchers = new List<BatchWatcher>(); 


        public void SpecExecutionFinished(ISpecContext context, SpecificationPlan plan)
        {
        }

        public void Handle<T>(T message) where T : IResultMessage
        {
        }

        public void SpecRequeued(SpecificationPlan plan, ISpecContext context)
        {
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