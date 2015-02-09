using System.Collections.Concurrent;
using System.Threading.Tasks;
using FubuCore;
using Storyteller.Core.Grammars;

namespace Storyteller.Core.Engine
{
    public class ExecutionQueue : IExecutionQueue
    {
        private readonly ISystem _system;
        private readonly ISpecRunner _runner;
        private readonly IObserver _observer;

        private readonly BlockingCollection<SpecificationPlan> _collection =
            new BlockingCollection<SpecificationPlan>(new ConcurrentBag<SpecificationPlan>());

        private Task _readingTask;

        public ExecutionQueue(ISystem system, ISpecRunner runner, IObserver observer)
        {
            _system = system;
            _runner = runner;
            _observer = observer;
        }

        public void Enqueue(SpecificationPlan plan)
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
            foreach (var plan in _collection.GetConsumingEnumerable())
            {
                using (var execution = _system.CreateContext())
                {
                    await _runner.Execute(plan, execution, this).ContinueWith(t =>
                    {
                        // TODO -- tag the context or plan if timed out?
                        // TODO -- tag the plan as having an attempt?

                        _observer.SpecExecutionFinished(t.Result, plan);
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