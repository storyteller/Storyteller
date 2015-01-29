using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using Storyteller.Core.Grammars;
using Storyteller.Core.Model;
using Storyteller.Core.Model.Persistence;

namespace Storyteller.Core.Engine
{

    public interface IExecutionQueue : IDisposable
    {
        void Enqueue(SpecificationPlan plan);
        void Start();
    }

    public interface ISpecRunner
    {
        Task<ISpecContext> Execute(SpecificationPlan plan, IExecutionContext execution, IExecutionQueue queue);
        void UseStopConditions(StopConditions conditions);
    }

    public class BatchRunner : ISpecRunner
    {
        private readonly IObserver _observer;
        private StopConditions _stopConditions = new StopConditions();

        public BatchRunner(IObserver observer)
        {
            _observer = observer;
        }

        private void execute(SpecificationPlan plan, ISpecContext context, IExecutionQueue queue)
        {
            try
            {
                var stepExecutor = new SynchronousExecutor(context);
                plan.AcceptVisitor(stepExecutor);

                plan.Attempts++;
                if (ShouldRetry(plan, context))
                {
                    // TODO -- instrumentation here
                    queue.Enqueue(plan);
                }

                // TODO -- deal with retry logic in here

            }
            catch (Exception ex)
            {
                // TODO -- log something here about a weird catastrophic error
            }
        }

        public bool ShouldRetry(SpecificationPlan plan, ISpecContext context)
        {
            throw new NotImplementedException();
        }

        // TODO -- have it take in the IExecutionQueue for retries?
        public Task<ISpecContext> Execute(SpecificationPlan plan, IExecutionContext execution, IExecutionQueue queue)
        {
            var context = new SpecContext(_observer, _stopConditions, execution.Services);

            
            return Task.Factory.StartNew(() =>
            {
                execute(plan, context, queue);

                return context as ISpecContext;
            }, context.Cancellation);
        }

        public void UseStopConditions(StopConditions conditions)
        {
            _stopConditions = conditions;
        }
    }

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
            _readingTask.Dispose();
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

                        _observer.SpecFinished(t.Result, plan);
                    });
                }
            }
        }

        public void Start()
        {
            _readingTask = Task.Factory.StartNew(runSpecs);
        }
    }

    public interface IPlanningQueue : IDisposable
    {
        void Enqueue(Specification spec);
    }

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
            _readingTask.Dispose();
        }
    }

    public interface IReaderQueue : IDisposable
    {
        void Enqueue(string file);
        void Enqueue(IEnumerable<string> files);
        void Start();
    }

    public class ReaderQueue : IReaderQueue
    {
        private readonly IPlanningQueue _planning;
        private readonly BlockingCollection<string> _collection = new BlockingCollection<string>(new ConcurrentBag<string>());
        private Task _readingTask;

        public ReaderQueue(IPlanningQueue planning)
        {
            _planning = planning;
        }

        public void Enqueue(string file)
        {
            _collection.Add(file);
        }

        public void Enqueue(IEnumerable<string> files)
        {
            files.Each(Enqueue);
        }

        public void Start()
        {
            _readingTask = Task.Factory.StartNew(() =>
            {
                foreach (var file in _collection.GetConsumingEnumerable())
                {
                    // TODO -- error handling here
                    var spec = XmlReader.ReadFromFile(file);
                    _planning.Enqueue(spec);
                }
            });
        }

        public void Dispose()
        {
            _collection.CompleteAdding();
            _collection.Dispose();
            _readingTask.Dispose();
        }
    }
}