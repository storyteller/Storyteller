using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using FubuCore;
using StoryTeller.Conversion;

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

        public Task Warmup()
        {
            return Task.FromResult("warmed up");
        }

        public void Dispose()
        {
        }

        public CellHandling CreateCellHandling()
        {
            return CellHandling.Basic();
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

            IServiceLocator IExecutionContext.Services { get { return Services; } }
            public void AfterExecution(ISpecContext context)
            {
                // Nothing
            }

            public IServiceLocator Services { get; private set; }
        }
    }




}