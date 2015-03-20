using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using StoryTeller.Conversion;
using StoryTeller.Engine;

namespace InvalidExamples
{
    public class InvalidExamplesSystem : ISystem
    {
        public void Dispose()
        {
            throw new NotImplementedException();
        }

        public IExecutionContext CreateContext()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<IConversionProvider> ConversionProviders()
        {
            throw new NotImplementedException();
        }

        public Task Warmup()
        {
            throw new NotImplementedException();
        }

        public Task Recycle()
        {
            throw new NotImplementedException();
        }
    }
}
