using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using StoryTeller.Conversion;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.NewEngine
{

    /* Notes
     
     * Need a new object to represent 
     
     
     
     
     
     
     */
    
    
    
    public class StorytellerHostBuilder
    {
        private Func<Task<IServiceProvider>> _bootstrapper = () => Task.FromResult((IServiceProvider)new NulloServiceProvider());

        private readonly IList<Func<IExecutionContext, Task>> _beforeEach = new List<Func<IExecutionContext, Task>>();
        private readonly IList<Func<IExecutionContext, Task>> _afterEach = new List<Func<IExecutionContext, Task>>();
        
        private readonly IList<Func<IServiceProvider, Task>> _beforeAll = new List<Func<IServiceProvider, Task>>();
        private readonly IList<Func<IServiceProvider, Task>> _afterAll = new List<Func<IServiceProvider, Task>>();

        
        public StorytellerHostBuilder Bootstrap(IServiceProvider services)
        {
            return Bootstrap(() => Task.FromResult(services));
        }

        public StorytellerHostBuilder Bootstrap(Func<Task<IServiceProvider>> bootstrapping)
        {
            _bootstrapper = bootstrapping;
            return this;
        }
        
        public StorytellerHostBuilder BeforeEach(Action<IExecutionContext> action)
        {
            throw new NotImplementedException();
        }
        
        public StorytellerHostBuilder BeforeEach(Func<IExecutionContext, Task> action)
        {
            throw new NotImplementedException();
        }
        
        public StorytellerHostBuilder BeforeAll(Action<IServiceProvider> action)
        {
            throw new NotImplementedException();
        }
        
        public StorytellerHostBuilder BeforeAll(Func<IServiceProvider, Task> action)
        {
            throw new NotImplementedException();
        }
        
        public StorytellerHostBuilder AfterEach(Action<IExecutionContext> action)
        {
            throw new NotImplementedException();
        }
        
        public StorytellerHostBuilder AfterEach(Func<IExecutionContext, Task> action)
        {
            throw new NotImplementedException();
        }
        
        public StorytellerHostBuilder AfterAll(Action<IServiceProvider> action)
        {
            throw new NotImplementedException();
        }
        
        public StorytellerHostBuilder AfterAll(Func<IServiceProvider, Task> action)
        {
            throw new NotImplementedException();
        }


        public Task<int> Run(string[] args)
        {
            // delegate to the command line
            
            throw new NotImplementedException();
        }

    }

    internal class NulloServiceProvider : IServiceProvider
    {
        public object GetService(Type serviceType)
        {
            return null;
        }
    }


    public interface IExecutionContext
    {
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

    public interface IExecutor
    {
        Task<StepResult> Execute(IExecutionContext context, Fixture fixture, StepValues values, CancellationToken cancellation);
        
        string Type { get; }
        
        /// <summary>
        /// Used for the spec timings. Will be the grammar key
        /// </summary>
        string Subject { get; }
        
        /// <summary>
        /// Only applies to setup or teardown actions or to the position within a paragraph
        /// </summary>
        object Position { get; set; }
    }
    
    public class ExecutionStep
    {
        public IExecutor Executor { get; set; }
        
        public StepValues Values { get; set; }


        

        
        /// <summary>
        /// Stop if this step fails
        /// </summary>
        public bool IsCritical { get; set; }
        
        /// <summary>
        /// Used for one off performance thresholds
        /// </summary>
        public long MaximumRuntimeInMilliseconds { get; set; }
    }


    public class SpecificationExecutor
    {
        public SpecificationExecutor(StopConditions stopConditions, IResultObserver observer)
        {
        }

        public Task<SpecResults> Execute(Specification specification)
        {
            var steps = CreatePlan(specification);
            var context = BuildContext(specification);
            
            /*
             * 1.) Explode the specification out into 
             * 2.) build Context
             * 3.) execute steps one at a time
             * 
             */
            
            // REFACTORING IDEAS
            // * Take in IServiceProvider into new ISpecContext
            // 
            
            throw new NotImplementedException();
        }

        private IExecutionContext BuildContext(Specification specification)
        {
            throw new NotImplementedException();
        }

        private IExecutionStep[] CreatePlan(Specification specification)
        {
            // See the existing CreatePlan stuff
            throw new NotImplementedException();
        }
    }
}
