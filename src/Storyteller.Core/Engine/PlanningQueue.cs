using System.Collections.Concurrent;
using System.Threading.Tasks;
using Storyteller.Core.Model;

namespace Storyteller.Core.Engine
{
    public class PlanningQueue : IPlanningQueue
    {
        private readonly IExecutionQueue _execution;
        private readonly BlockingCollection<Specification> _collection = new BlockingCollection<Specification>(new ConcurrentBag<Specification>());
        private Task _readingTask;

        public PlanningQueue(IExecutionQueue execution)
        {
            _execution = execution;
        }

        public void Enqueue(Specification spec)
        {
            _collection.Add(spec);
        }

        public void Start(FixtureLibrary library)
        {
            _readingTask = Task.Factory.StartNew(() =>
            {
                foreach (var spec in _collection.GetConsumingEnumerable())
                {
                    var plan = spec.CreatePlan(library);
                    _execution.Enqueue(plan);
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