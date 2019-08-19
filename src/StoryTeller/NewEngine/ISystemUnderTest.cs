using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using StoryTeller.Model;

namespace StoryTeller.NewEngine
{
    public interface ISystemUnderTest : IDisposable
    {
        FixtureLibrary Fixtures { get; }
        
        CellHandling Handling { get; }

        Task BeforeExecution(IExecutionContext context);

        Task AfterExecution(IExecutionContext context);
        
        IServiceProvider Services { get; }
        
        IProject Project { get; }
    }

    public class SystemUnderTest : ISystemUnderTest
    {
        internal SystemUnderTest()
        {
        }

        public FixtureLibrary Fixtures { get; internal set;}
        public CellHandling Handling { get; internal set;}
        public async Task BeforeExecution(IExecutionContext context)
        {
            foreach (var func in BeforeEach)
            {
                await func(context);
            }
        }

        public async Task AfterExecution(IExecutionContext context)
        {
            foreach (var func in AfterEach)
            {
                await func(context);
            }
        }

        public IServiceProvider Services { get; internal set;}
        public IProject Project { get; internal set; }


        internal readonly IList<Func<IExecutionContext, Task>> BeforeEach = new List<Func<IExecutionContext, Task>>();
        internal readonly IList<Func<IExecutionContext, Task>> AfterEach = new List<Func<IExecutionContext, Task>>();
        
        internal readonly IList<Func<IServiceProvider, Task>> BeforeAll = new List<Func<IServiceProvider, Task>>();
        internal readonly IList<Func<IServiceProvider, Task>> AfterAll = new List<Func<IServiceProvider, Task>>();

        // TODO -- add a CancellationToken of some sort?
        public async Task Warmup()
        {
            foreach (var func in BeforeAll)
            {
                await func(Services);
            }
        }
        
        public IList<IDisposable> Disposables { get; } = new List<IDisposable>();

        // TODO -- also track disposables too
        public async Task Shutdown()
        {
            // do something to log errors
            foreach (var func in AfterAll)
            {
                await func(Services);
            }

            foreach (var disposable in Disposables)
            {
                disposable.Dispose();
            }
        }


        public void Dispose()
        {
            // TODO: I know, right? Wait for IAsyncDisposable too
            Shutdown().GetAwaiter().GetResult();
        }
    }
}
