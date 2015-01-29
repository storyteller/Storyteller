using System;
using System.Collections;
using System.Collections.Generic;
using Storyteller.Core.Conversion;
using Storyteller.Core.Equivalence;
using Storyteller.Core.Model;
using Storyteller.Core.Model.Persistence;

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

            var cellHandling = BuildCellHandling();
            
            _system
                .Warmup()
                .ContinueWith(t => _execution.Start());

            FixtureLibrary.CreateForAppDomain(cellHandling)
                .ContinueWith(t =>
                {
                    _observer.FixturesRead(t.Result);
                    _planning.Start(t.Result);

                    return t.Result;
                });
            
            _reader.Start();
        }

        public CellHandling BuildCellHandling()
        {
            var conversions = new Conversions(_system.ConversionProviders());

            // TODO -- add the system level lists here too
            return new CellHandling(new EquivalenceChecker(), conversions);
        }
    }
}