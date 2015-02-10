using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Storyteller.Core.Model;
using Storyteller.Core.Model.Persistence;
using Storyteller.Core.Remotes;
using Storyteller.Core.Remotes.Messaging;

namespace Storyteller.Core.Engine
{
    public class SpecificationEngine : IDisposable
    {
        private readonly ExecutionQueue _execution;
        private readonly IObserver _observer;
        private readonly PlanningQueue _planning;
        private readonly ReaderQueue _reader;
        private readonly ISpecRunner _runner;
        private readonly ISystem _system;

        public SpecificationEngine(ISystem system, IObserver observer, ISpecRunner runner)
        {
            _system = system;
            _observer = observer;
            _runner = runner;

            _execution = new ExecutionQueue(system, runner, observer);
            _planning = new PlanningQueue(_execution);
            _reader = new ReaderQueue(_planning);
        }

        public void Dispose()
        {
            _system.Dispose();
            _execution.Dispose();
            _planning.Dispose();
            _reader.Dispose();
        }

        public void Enqueue(IEnumerable<SpecNode> nodes)
        {
            _observer.SpecQueued(nodes);
            _reader.Enqueue(nodes);
        }

        public void Enqueue(SpecNode node)
        {
            _observer.SpecQueued(node);
            _reader.Enqueue(node);
        }

        public Task<IEnumerable<SpecResult>> RunBatch(IEnumerable<SpecNode> nodes)
        {
            Task<IEnumerable<SpecResult>> task = _observer.MonitorBatch(nodes);

            Enqueue(nodes);

            return task;
        }

        public void Start(StopConditions stopConditions)
        {
            _runner.UseStopConditions(stopConditions);

            CellHandling cellHandling = CellHandling.ForSystem(_system);

            Task warmup = _system
                .Warmup()
                .ContinueWith(t =>
                {
                    if (!t.IsFaulted)
                    {
                        _execution.Start();
                    }
                    else
                    {
                        throw t.Exception;
                    }
                });

            Task<FixtureLibrary> fixtures = FixtureLibrary.CreateForAppDomain(cellHandling)
                .ContinueWith(t =>
                {
                    _planning.Start(t.Result);

                    return t.Result;
                });

            Task.WhenAll(warmup, fixtures).ContinueWith(t =>
            {
                var message = new SystemRecycled
                {
                    success = true,
                    fixtures = fixtures.Result.Models.GetAll().ToArray(),
                    system_name = _system.ToString(),
                    time = DateTime.Now,
                    name = Path.GetFileName(AppDomain.CurrentDomain.BaseDirectory)
                };

                if (warmup.IsFaulted)
                {
                    message.success = false;
                    message.error = warmup.Exception.Flatten().InnerExceptions.Select(x => x.ToString()).Join("\n\n");
                }

                EventAggregator.SendMessage(message);
            });

            _reader.Start();
        }
    }
}