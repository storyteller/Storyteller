using System;
using System.Threading;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.NewEngine
{
    public class ExecutionContext : IExecutionContext
    {
        public ExecutionContext(IServiceProvider services, Specification specification, IProject project)
        {
            Services = services;
            Specification = specification;
            Project = project;
        }

        public IProject Project { get; }
        public IServiceProvider Services { get; }
        public Specification Specification { get; }

        public State State { get; } = new State();
        public Counts Counts { get; } = new Counts();
        public Timings Timings { get; } = new Timings();
        public IReporting Reporting { get; } = new Reporting();
        public CancellationToken Cancellation { get; } = new CancellationToken();
        public bool Wait(Func<bool> condition, TimeSpan timeout, int millisecondPolling = 500)
        {
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
