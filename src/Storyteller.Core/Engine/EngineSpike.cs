using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using FubuCore;
using Storyteller.Core.Grammars;
using Storyteller.Core.Model;
using Storyteller.Core.Model.Persistence;
using Storyteller.Core.Results;

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

    public class BatchObserver : IObserver
    {
        private readonly IDictionary<string, bool> _finished = new Dictionary<string, bool>();
        private TaskCompletionSource<bool> _task;

        public Task Watch(IEnumerable<SpecNode> nodes)
        {
            nodes.Each(x => _finished.Add(x.id, false));
            _task = new TaskCompletionSource<bool>();

            return _task.Task;
        }

        public void SpecExecutionFinished(ISpecContext context, SpecificationPlan plan)
        {
        }

        public void Handle<T>(T message) where T : IResultMessage
        {
        }

        public void FixturesRead(FixtureLibrary library)
        {
        }

        public void SpecRequeued(SpecificationPlan plan, ISpecContext context)
        {
        }

        public void SpecHandled(string id)
        {
            _finished[id] = true;

            if (_finished.Values.All(x => x)) _task.SetResult(true);
        }
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
                    _observer.SpecRequeued(plan, context);
                    queue.Enqueue(plan);
                }
                else
                {
                    _observer.SpecHandled(plan.Specification.Id);
                }


            }
            catch (Exception ex)
            {
                // TODO -- log something here about a weird catastrophic error
            }
        }

        public bool ShouldRetry(SpecificationPlan plan, ISpecContext context)
        {
            return false;
        }

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
        void Enqueue(SpecNode node);
        void Enqueue(IEnumerable<SpecNode> nodes);
        void Start();
    }

    public class ReaderQueue : IReaderQueue
    {
        private readonly IPlanningQueue _planning;
        private readonly BlockingCollection<SpecNode> _collection = new BlockingCollection<SpecNode>(new ConcurrentBag<SpecNode>());
        private Task _readingTask;

        public ReaderQueue(IPlanningQueue planning)
        {
            _planning = planning;
        }

        public void Enqueue(SpecNode node)
        {
            _collection.Add(node);
        }

        public void Enqueue(IEnumerable<SpecNode> nodes)
        {
            nodes.Each(file => Enqueue((SpecNode) file));
        }

        public void Start()
        {
            _readingTask = Task.Factory.StartNew(() =>
            {
                foreach (var node in _collection.GetConsumingEnumerable())
                {
                    // TODO -- error handling here
                    var spec = XmlReader.ReadFromFile(node.filename);
                    spec.Id = node.id;

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