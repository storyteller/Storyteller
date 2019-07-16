using System;
using System.Threading;
using StoryTeller;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Results;

namespace Storyteller
{

    public class SpecificationRunner
    {
      
    }
    
    
    public interface IExecutionContext
    {
        
        /// <summary>
        /// Information about the current specification project including
        /// file paths
        /// </summary>
        IProject Project { get; }
        
        /// <summary>
        /// Delegates to the service locator in the
        /// IExecutionContext for this specification execution
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        IServiceProvider Services { get; }


        /// <summary>
        /// A state bag of objects used to share state
        /// between grammars and fixtures within the
        /// execution of a specification
        /// </summary>
        State State { get; }

        
        /// <summary>
        /// The current "counts" of rights, wrongs,
        /// errors, and invalid date reported by the
        /// engine so far
        /// </summary>
        Counts Counts { get; }

        /// <summary>
        /// The currently executing Specification
        /// </summary>
        Specification Specification { get; }

        /// <summary>
        /// Can be used to add extra contextual information
        /// to the performance tracing
        /// </summary>
        Timings Timings { get; }

        /// <summary>
        /// Can be used to add custom html tracing to 
        /// the specification results
        /// </summary>
        IReporting Reporting { get; }
        
        
        
        /// <summary>
        /// Check this for whether or not the current execution
        /// has been cancelled
        /// </summary>
        CancellationToken Cancellation { get; }
    }

    public class ExecutionContext : IExecutionContext
    {
        public ExecutionContext(IServiceProvider services, Specification specification)
        {
            Services = services;
            Specification = specification;
        }

        public IServiceProvider Services { get; }
        public Specification Specification { get; }

        public State State { get; } = new State();
        public Counts Counts { get; } = new Counts();
        public Timings Timings { get; } = new Timings();
        public IReporting Reporting { get; } = new Reporting();
        public CancellationToken Cancellation { get; } = new CancellationToken();
    }
}