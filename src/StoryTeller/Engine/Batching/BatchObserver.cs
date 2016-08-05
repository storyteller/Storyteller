using System.Collections.Generic;
using System.Threading.Tasks;
using Baseline;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Results;

namespace StoryTeller.Engine.Batching
{
    public class BatchObserver : IBatchObserver
    {
        private readonly IList<BatchWatcher> _watchers = new List<BatchWatcher>(); 


        public void Handle<T>(T message) where T : IResultMessage
        {
            // Nothing
        }

        public void SpecRequeued(SpecExecutionRequest request)
        {
            // TODO -- more instrumentation here
        }


        public void SpecHandled(SpecExecutionRequest request, SpecResults results)
        {
            _watchers.Each(x => x.SpecHandled(request.Plan, results));
            _watchers.RemoveAll(x => x.IsCompleted());
        }

        public Task<IEnumerable<BatchRecord>> MonitorBatch(IEnumerable<Specification> specs)
        {
            var watcher = new BatchWatcher(specs);
            _watchers.Add(watcher);

            return watcher.Task;
        }

    }
}