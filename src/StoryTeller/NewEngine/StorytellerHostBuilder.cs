using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace StoryTeller.NewEngine
{
    
    
    public class StorytellerHostBuilder 
    {
        private readonly SystemUnderTest _system = new SystemUnderTest();

        
        // For right now, let's say this is passed in
        public StorytellerHostBuilder(IServiceProvider services)
        {
        }

        public StorytellerHostBuilder BeforeEach(Action<IExecutionContext> action)
        {
            return BeforeEach(c =>
            {
                action(c);
                return Task.CompletedTask;
            });
        }
        
        public StorytellerHostBuilder BeforeEach(Func<IExecutionContext, Task> action)
        {
            _system.BeforeEach.Add(action);
            return this;
        }

        public StorytellerHostBuilder BeforeEach<T>(Func<T, Task> func)
        {
            return BeforeEach(c => func((T) c.Services.GetService(typeof(T))));
        }
        
        public StorytellerHostBuilder BeforeEach<T>(Action<T> action)
        {
            return BeforeEach(c => action((T) c.Services.GetService(typeof(T))));
        }
        
        public StorytellerHostBuilder AfterEach(Action<IExecutionContext> action)
        {
            return AfterEach(c =>
            {
                action(c);
                return Task.CompletedTask;
            });
        }
        
        public StorytellerHostBuilder AfterEach(Func<IExecutionContext, Task> action)
        {
            _system.AfterEach.Add(action);
            return this;
        }

        public StorytellerHostBuilder AfterEach<T>(Func<T, Task> func)
        {
            return AfterEach(c => func((T) c.Services.GetService(typeof(T))));
        }
        
        public StorytellerHostBuilder AfterEach<T>(Action<T> action)
        {
            return AfterEach(c => action((T) c.Services.GetService(typeof(T))));
        }


        public StorytellerHostBuilder BeforeAll(Func<IServiceProvider, Task> func)
        {
            _system.BeforeAll.Add(func);
            return this;
        }
        
        public StorytellerHostBuilder BeforeAll(Action<IServiceProvider> action)
        {
            return BeforeAll(c =>
            {
                action(c);
                return Task.CompletedTask;
            });
        }
        
        public StorytellerHostBuilder BeforeAll<T>(Func<T, Task> func)
        {
            return BeforeAll(s => func((T) s.GetService(typeof(T))));
        }
        
        public StorytellerHostBuilder BeforeAll<T>(Action<T> action)
        {
            return BeforeAll(s => action((T) s.GetService(typeof(T))));
        }
        
        public StorytellerHostBuilder AfterAll(Func<IServiceProvider, Task> func)
        {
            _system.AfterAll.Add(func);
            return this;
        }
        
        public StorytellerHostBuilder AfterAll(Action<IServiceProvider> action)
        {
            return AfterAll(c =>
            {
                action(c);
                return Task.CompletedTask;
            });
        }
        
        public StorytellerHostBuilder AfterAll<T>(Func<T, Task> func)
        {
            return AfterAll(s => func((T) s.GetService(typeof(T))));
        }
        
        public StorytellerHostBuilder AfterAll<T>(Action<T> action)
        {
            return AfterAll(s => action((T) s.GetService(typeof(T))));
        }




    }
}
