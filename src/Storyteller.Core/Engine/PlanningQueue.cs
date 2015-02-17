using System.Collections.Concurrent;
using System.Threading.Tasks;
using Storyteller.Core.Model;

namespace Storyteller.Core.Engine
{
    public class PlanningQueue : IPlanningQueue
    {
        private readonly IExecutionQueue _execution;
        private readonly BlockingCollection<SpecExecutionRequest> _collection = new BlockingCollection<SpecExecutionRequest>(new ConcurrentBag<SpecExecutionRequest>());
        private Task _readingTask;

        public PlanningQueue(IExecutionQueue execution)
        {
            _execution = execution;
        }

        public void Enqueue(SpecExecutionRequest request)
        {
            _collection.Add(request);
        }

        public void Start(FixtureLibrary library)
        {
            _readingTask = Task.Factory.StartNew(() =>
            {
                foreach (var request in _collection.GetConsumingEnumerable())
                {
                    if (request.IsCancelled) continue;

                    request.CreatePlan(library);
                    _execution.Enqueue(request);
                }
            });
        }

        public void Dispose()
        {
            _collection.CompleteAdding();
            _collection.Dispose();
        }
    }
}