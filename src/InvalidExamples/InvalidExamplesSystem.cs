using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using StoryTeller;
using StoryTeller.Conversion;
using StoryTeller.Engine;
using IRunExecutionContext = StoryTeller.Engine.IRunExecutionContext;

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

        public IRunExecutionContext CreateRunExecutionContext()
        {
            throw new NotImplementedException();
        }

        public CellHandling CreateCellHandling()
        {
            throw new NotImplementedException();
        }

        public CellHandling Start()
        {
            throw new NotImplementedException();
        }

        public Task Recycle()
        {
            throw new NotImplementedException();
        }

        public Task Warmup()
        {
            return Task.FromResult(string.Empty);
        }
    }
}
