using System;
using System.Threading.Tasks;
using Baseline;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;

namespace StoryTeller.NewEngine
{
    public class StorytellerHostBuilder 
    {
        private readonly SystemUnderTest _system = new SystemUnderTest();

        private readonly CellHandling _cellHandling = StoryTeller.CellHandling.Basic();


        private Func<Task<IServiceProvider>> _bootstrapper =
            () => Task.FromResult((IServiceProvider) new NulloServiceProvider());

        private string _projectDirectory;


        // For right now, let's say this is passed in
        public StorytellerHostBuilder(IServiceProvider services)
        {
            _bootstrapper = () => Task.FromResult(services);
        }

        public StorytellerHostBuilder()
        {
        }
        
        public static string FindParallelDirectory(string projectName, string sourceDirectory = "src")
        {
#if NET46
            var path = AppDomain.CurrentDomain.BaseDirectory;
#else
            var path = AppContext.BaseDirectory;
#endif

            while (!path.EndsWith(sourceDirectory))
            {
                path = path.ParentDirectory();
            }

            path = path.AppendPath(projectName);

            return path;
        }

        public StorytellerHostBuilder ProjectDirectory(string projectDirectory)
        {
            _projectDirectory = projectDirectory;
            return this;
        }

        public StorytellerHostBuilder LoadParallelProjectContainingType<T>(string sourceFolder = "src")
        {
            var assemblyName = typeof(T).Assembly.GetName().Name;
            return LoadParallelProject(assemblyName, sourceFolder);
        }
        
        public StorytellerHostBuilder LoadParallelProject(string projectName, string sourceFolder = "src")
        {
            _projectDirectory = FindParallelDirectory(projectName, sourceFolder);
            return this;
        }

        public StorytellerHostBuilder Bootstrap(Func<Task<IServiceProvider>> bootstrapper)
        {
            _bootstrapper = bootstrapper;
            return this;
        }

        public StorytellerHostBuilder BeforeEach(Action<IExecutionContext> action)
        {
            return BeforeEach(c =>
            {
                action(c);
                return Task.CompletedTask;
            });
        }

        // TODO -- have an overload that takes in the Project?
        public StorytellerHostBuilder CellHandling(Action<CellHandling> configure)
        {
            configure(_cellHandling);
            return this;
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


        /// <summary>
        /// Create an AdhocRunner to execute specifications in memory. Useful for
        /// creating NUnit or XUnit test fixtures to run Storyteller specs
        /// </summary>
        /// <param name="directory"></param>
        /// <returns></returns>
        public async Task<AdhocRunner> ToAdhocRunner(string directory = null)
        {
            // Task 1: find and create Fixture objects
            var fixtureBuilder = Task.Factory.StartNew(() => FixtureLibrary.CreateForAppDomain(_cellHandling));

            // Task 2: start the actual system under test
            var systemBuilder = _bootstrapper().ContinueWith(async t =>
            {
                var services = t.Result;
                var s = new SystemUnderTest {Services = services};
                await s.Warmup();

                return s;
            }).Unwrap();

            // Task 3: load specification files from disk
            var hierarchyBuilder = Task.Factory.StartNew(() =>
            {
                // TODO -- guess the default project. 

                var specDirectory = HierarchyLoader.SelectSpecPath(_projectDirectory);
                
                // TODO -- do a better job of guessing the specs path
                return HierarchyLoader.ReadHierarchy(specDirectory).ToHierarchy();
            });

            var system = await systemBuilder;
            system.Fixtures = await fixtureBuilder;
            
            return new AdhocRunner(system, await hierarchyBuilder);
        }

    }
}
