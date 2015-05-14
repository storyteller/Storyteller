using System;
using System.Threading.Tasks;
using FubuCore;

namespace StoryTeller.Engine
{
    public class NulloSystem : ISystem
    {
        private readonly InMemoryServiceLocator _services = new InMemoryServiceLocator();

        public IExecutionContext CreateContext()
        {
            return new SimpleExecutionContext(_services);
        }

        public void Register<T>(T service)
        {
            _services.Add(service);
        }

        public Task Recycle()
        {
            return Task.FromResult("recycled");
        }

        public CellHandling Start()
        {
            return CellHandling.Basic();
        }

        public void Dispose()
        {
        }
    }

    public class SimpleExecutionContext : IExecutionContext
    {
        private readonly InMemoryServiceLocator _services;

        public SimpleExecutionContext()
        {
            _services = new InMemoryServiceLocator();
        }

        public void Register<T>(T service)
        {
            _services.Add(service);
        }

        internal SimpleExecutionContext(InMemoryServiceLocator services)
        {
            _services = services;
        }

        void IDisposable.Dispose()
        {
        }

        public T GetService<T>()
        {
            return _services.GetInstance<T>();
        }

        public void AfterExecution(ISpecContext context)
        {
            // Nothing
        }
    }
}