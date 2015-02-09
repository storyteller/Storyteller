using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Storyteller.Core.Conversion;
using Storyteller.Core.Equivalence;
using Storyteller.Core.Model;
using Storyteller.Core.Model.Persistence;
using Storyteller.Core.Remotes;
using Storyteller.Core.Remotes.Messaging;

namespace Storyteller.Core.Engine
{
    /*
     * TODO
     * 1.) Some method for queueing files
     * 2.) Some method for queueing a specification
     * 3.) Some method for queueing a retry plan?
     * 4.) Some way to query for the depth of the queue?
     * 
     */


    // THIS IS SPIKE CODE, NOT REAL CODE
    public class SpecificationEngine : IDisposable
    {
        private readonly ISystem _system;
        private readonly IObserver _observer;
        private readonly ISpecRunner _runner;
        private readonly ExecutionQueue _execution;
        private readonly PlanningQueue _planning;
        private readonly ReaderQueue _reader;

        // TODO -- what builds this thing? TeamCity observer, or something else?
        public SpecificationEngine(ISystem system, IObserver observer, ISpecRunner runner)
        {
            _system = system;
            _observer = observer;
            _runner = runner;

            _execution = new ExecutionQueue(system, runner, observer);
            _planning = new PlanningQueue(_execution);
            _reader = new ReaderQueue(_planning);
        }

        public void Enqueue(IEnumerable<SpecNode> nodes)
        {
            _reader.Enqueue(nodes);
        }

        public void Dispose()
        {
            _system.Dispose();
            _execution.Dispose();
            _planning.Dispose();
            _reader.Dispose();
        }

        public void Start(StopConditions stopConditions)
        {
            _runner.UseStopConditions(stopConditions);

            var cellHandling = CellHandling.ForSystem(_system);
            
           var warmup = _system
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

            var fixtures = FixtureLibrary.CreateForAppDomain(cellHandling)
                .ContinueWith(t =>
                {
                    _observer.FixturesRead(t.Result);
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
                    time = DateTime.Now
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