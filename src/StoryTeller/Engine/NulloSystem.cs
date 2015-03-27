using System;
using System.Threading.Tasks;
using FubuCore;

namespace StoryTeller.Engine
{
    public class NulloSystem : ISystem
    {
        public readonly InMemoryServiceLocator Services = new InMemoryServiceLocator();

        public IExecutionContext CreateContext()
        {
            return new SimpleExecutionContext(Services);
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

        public class SimpleExecutionContext : IExecutionContext
        {
            public SimpleExecutionContext(IServiceLocator services)
            {
                Services = services;
            }

            void IDisposable.Dispose()
            {
            }

            IServiceLocator IExecutionContext.Services
            {
                get { return Services; }
            }

            public void AfterExecution(ISpecContext context)
            {
                // Nothing
            }

            public IServiceLocator Services { get; private set; }
        }
    }
}