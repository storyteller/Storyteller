using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Storyteller.Core.Model;
using Storyteller.Core.Remotes;
using Storyteller.Core.Remotes.Messaging;

namespace Storyteller.Core.Engine
{
    public interface ISpecificationEngine
    {
        void Enqueue(SpecExecutionRequest request);
    }

    public class SpecificationEngine : IDisposable, ISpecificationEngine
    {
        private readonly ExecutionQueue _execution;
        private readonly PlanningQueue _planning;
        private readonly ReaderQueue _reader;
        private readonly ISpecRunner _runner;
        private readonly ISystem _system;

        public SpecificationEngine(ISystem system, IObserver observer, ISpecRunner runner)
        {
            _system = system;
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

        public void Enqueue(SpecExecutionRequest request)
        {
            _reader.Enqueue(request);
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