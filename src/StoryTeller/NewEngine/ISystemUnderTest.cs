using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using StoryTeller.Model;

namespace StoryTeller.NewEngine
{
    public interface ISystemUnderTest
    {
        FixtureLibrary Fixtures { get; }
        
        CellHandling Handling { get; }

        Task Ready();
        
        
        Task BeforeExecution(IExecutionContext context);

        Task AfterExecution(IExecutionContext context);
        
        IServiceProvider Services { get; }
        
        IProject Project { get; }
    }

    public class SystemUnderTest : ISystemUnderTest
    {
        public FixtureLibrary Fixtures { get; }
        public CellHandling Handling { get; }
        public Task Ready()
        {
            throw new NotImplementedException();
        }

        public Task BeforeExecution(IExecutionContext context)
        {
            throw new NotImplementedException();
        }

        public Task AfterExecution(IExecutionContext context)
        {
            throw new NotImplementedException();
        }

        public IServiceProvider Services { get; }
        public IProject Project { get; }

        public SystemUnderTest(IServiceProvider services, FixtureLibrary fixtures, CellHandling handling, IProject project)
        {
            Services = services;
            Fixtures = fixtures;
            Handling = handling;
            Project = project;
        }

        internal readonly IList<Func<IExecutionContext, Task>> BeforeEach = new List<Func<IExecutionContext, Task>>();
        internal readonly IList<Func<IExecutionContext, Task>> AfterEach = new List<Func<IExecutionContext, Task>>();
        
        internal readonly IList<Func<IServiceProvider, Task>> BeforeAll = new List<Func<IServiceProvider, Task>>();
        internal readonly IList<Func<IServiceProvider, Task>> AfterAll = new List<Func<IServiceProvider, Task>>();

        
    }
}
