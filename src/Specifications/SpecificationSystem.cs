using System;
using System.Threading.Tasks;
using Baseline;
using StorytellerDocGen;
using StoryTeller;
using StoryTeller.Engine;

namespace Specifications
{
    public class SpecificationSystem : ISystem
    {
        public static readonly string Path;


        public IExecutionContext CreateContext()
        {
            return new SpecificationContext();
        }

        public CellHandling Start()
        {
            return CellHandling.Basic();
        }

        public void Dispose()
        {

        }

        public Task Warmup()
        {
            return Task.FromResult(string.Empty);
        }
    }

    public class SpecificationContext : IExecutionContext
    {
        private readonly InMemoryServiceLocator _services;
        private readonly DocSettings _docSettings;

        public SpecificationContext()
        {
            _services = new InMemoryServiceLocator();
            _docSettings = DocSettings.ForTesting();
            _services.Add(_docSettings);
        }

        public void Dispose()
        {
            new FileSystem().DeleteDirectory(_docSettings.Root);
        }

        public T GetService<T>()
        {
            return _services.GetInstance<T>();
        }

        public void BeforeExecution(ISpecContext context)
        {
            // Nothing
        }

        public void AfterExecution(ISpecContext context)
        {
            // Nothing
        }
    }



    public class InMemoryServiceLocator 
    {
        private readonly Cache<Type, object> _services = new Cache<Type, object>();
        private readonly Cache<string, object> _namedServices = new Cache<string, object>();

        public void Add<T>(T service)
        {
            _services[typeof(T)] = service;
        }
        public void Add<T>(T service, string name)
        {
            _namedServices[name] = service;
        }

        public T GetInstance<T>()
        {
            return (T)_services[typeof(T)];
        }

        public T GetInstance<T>(string name)
        {
            return (T)_namedServices[name];
        }

        public object GetInstance(Type type)
        {
            return _services[type];
        }
    }

}