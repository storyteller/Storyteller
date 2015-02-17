using System.Collections.Concurrent;
using System.Threading.Tasks;

namespace Storyteller.Core.Engine
{
    public class ExecutionQueue : IExecutionQueue
    {
        private readonly ISystem _system;
        private readonly ISpecRunner _runner;
        private readonly IResultObserver _resultObserver;

        private readonly BlockingCollection<SpecExecutionRequest> _collection =
            new BlockingCollection<SpecExecutionRequest>(new ConcurrentBag<SpecExecutionRequest>());

        private Task _readingTask;

        public ExecutionQueue(ISystem system, ISpecRunner runner, IResultObserver observer)
        {
            _system = system;
            _runner = runner;
            _resultObserver = observer;
        }

        public void Enqueue(SpecExecutionRequest plan)
        {
            _collection.Add(plan);
        }

        public void Dispose()
        {
            _collection.CompleteAdding();
            _collection.Dispose();
        }

        private async void runSpecs()
        {
            foreach (var request in _collection.GetConsumingEnumerable())
            {
                if (request.IsCancelled) continue;

                using (var execution = _system.CreateContext())
                {
                    await _runner.Execute(request, execution, this).ContinueWith(t =>
                    {
                        // TODO -- tag the context or plan if timed out?
                        // TODO -- tag the plan as having an attempt?

                        request.SpecExecutionFinished(t.Result);
                    });
                }
            }
        }

        public void Start()
        {
            _readingTask = Task.Factory.StartNew(runSpecs);
        }
    }
}