using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Storyteller.Core.Conversion;
using Storyteller.Core.Engine;

namespace BadSystem
{
    public class BadSystem : ISystem
    {
        public void Dispose()
        {
            
        }

        public IExecutionContext CreateContext()
        {
            throw new Exception();
        }

        public IEnumerable<IConversionProvider> ConversionProviders()
        {
            return new IConversionProvider[0];
        }

        public Task Warmup()
        {
            return Task.Factory.StartNew(() =>
            {
                throw new DivideByZeroException();
            });
        }

        public Task Recycle()
        {
            return Task.FromResult("ok");
        }
    }
}