using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using FubuCore;
using Storyteller.Core.Conversion;

namespace Storyteller.Core.Engine
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

        public IEnumerable<IConversionProvider> ConversionProviders()
        {
            return new IConversionProvider[0];
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

            public IServiceLocator Services { get; private set; }
        }
    }




}