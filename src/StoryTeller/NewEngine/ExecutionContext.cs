using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using Baseline;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.NewEngine
{
    public class ExecutionContext : IExecutionContext
    {
        /*
         * TODOs
         * 
         *
         *
         * 
         */
        
        
        private readonly CancellationTokenSource _cancellation = new CancellationTokenSource();
        
        public ExecutionContext(ISystemUnderTest system, Specification specification)
        {
            Services = system.Services;
            Specification = specification;
            Project = system.Project;
        }

        public IProject Project { get; }
        public IServiceProvider Services { get; }
        public Specification Specification { get; }

        public State State { get; } = new State();
        public Counts Counts { get; } = new Counts();
        public Timings Timings { get; } = new Timings();
        public IReporting Reporting { get; } = new Reporting();
        public CancellationToken Cancellation => _cancellation.Token;

        public void Start()
        {
            // Starts the timings
            throw new NotImplementedException();
        }
        
        public SpecResults FinalizeResults(int attempts)
        {
            var performance = Timings.Finish().ToArray();

            //PerformancePolicies.Apply(this, performance);

            return new SpecResults
            {
                Counts = Counts,
                Results = Results.ToArray(),
                Performance = performance,
                Duration = Timings.Duration,
                Reporting = Reporting.As<Reporting>().GenerateReports(),
                Attempts = attempts,
                HadCriticalException = HadCriticalException
            };

        }

        public bool HadCriticalException { get; private set; }
        
        public IList<StepResult> Results { get; } = new List<StepResult>();

        public bool Wait(Func<bool> condition, TimeSpan timeout, int millisecondPolling = 500)
        {
            // TODO -- make this be aware of the cancellation token
            throw new NotImplementedException();
        }

        // Make this smart enough to cancel using the project if the result requires it
        public void LogResult<T>(T result, PerfRecord record) where T : IResultMessage
        {
            throw new NotImplementedException();
        }

        // Make this smart enough to cancel the spec if the exception is catastropic or critical
        public void LogException(string id, Exception ex, PerfRecord record, object position = null)
        {
            throw new NotImplementedException();
        }
    }
}
