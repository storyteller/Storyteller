using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using StoryTeller;
using StoryTeller.Conversion;
using StoryTeller.Engine;

namespace BadSystem
{
    public class BadSystem : ISystem
    {
        public void Dispose()
        {
            
        }

        public CellHandling CreateCellHandling()
        {
            return CellHandling.Basic();
        }

        public IExecutionContext CreateContext()
        {
            throw new Exception();
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