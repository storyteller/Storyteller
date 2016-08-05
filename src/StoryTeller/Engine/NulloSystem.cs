using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Baseline;

namespace StoryTeller.Engine
{
    public class NulloSystem : ISystem
    {

        private readonly LightweightCache<Type, object> _services = new LightweightCache<Type, object>();

        public IExecutionContext CreateContext()
        {
            return new SimpleExecutionContext(_services);
        }

        public void Register<T>(T service)
        {
            _services[typeof(T)] = service;
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

        public Task Warmup()
        {
            return Task.FromResult(string.Empty);
        }
    }

    public class SimpleExecutionContext : IExecutionContext
    {
        private readonly LightweightCache<Type, object> _services;

        public SimpleExecutionContext()
        {
            _services = new LightweightCache<Type, object>();
        }

        public void Register<T>(T service)
        {
            _services[typeof(T)] = service;
        }

        internal SimpleExecutionContext(LightweightCache<Type, object> services)
        {
            _services = services;
        }

        void IDisposable.Dispose()
        {
        }

        public T GetService<T>()
        {
            return (T) _services[typeof(T)];
        }

        public void AfterExecution(ISpecContext context)
        {
            // Nothing
        }

        public void BeforeExecution(ISpecContext context)
        {
            // Nothing
        }
    }
}