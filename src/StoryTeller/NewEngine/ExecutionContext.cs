using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Baseline;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.NewEngine
{
    public class ExecutionContext : IExecutionContext
    {
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
        public Timings Timings => Result.Timings;
        public IReporting Reporting => Result;
        public CancellationToken Cancellation => _cancellation.Token;

        public void Start()
        {
            Result = new ExecutionResult();
            Result.Start(Specification);
        }
        
        public ExecutionResult FinalizeResults(int attempts, EndedBy ended)
        {
            Result.FinalizeResults(attempts, ended);


            
            return Result;
        }

        public bool HadCriticalException { get; private set; }
        

        public bool Wait(Func<bool> condition, TimeSpan timeout, int millisecondPolling = 500)
        {
            // TODO -- make this be aware of the cancellation token
            throw new NotImplementedException();
        }

        public bool Wait(Func<Task<bool>> condition, TimeSpan timeout, int millisecondPolling = 500)
        {
            throw new NotImplementedException();
        }


        public ExecutionResult Result { get; private set; }
    }
}
