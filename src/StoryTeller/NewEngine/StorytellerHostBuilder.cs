using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Storyteller
{
    public class StorytellerHostBuilder
    {
        //private Func<Task<IServiceProvider>> _bootstrapper = () => Task.FromResult((IServiceProvider)new NulloServiceProvider());

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
            //_bootstrapper = bootstrapping;
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

//        public Task<IStorytellerHost> Start()
//        {
//            throw new NotImplementedException();
//        }

    }
}
