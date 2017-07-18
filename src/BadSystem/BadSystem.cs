using System;
using System.Threading.Tasks;
using StoryTeller;
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

        public IRunExecutionContext CreateRunExecutionContext()
        {
            return null;
        }

        public CellHandling Start()
        {
            throw new DivideByZeroException();
        }

        public Task Warmup()
        {
            return Task.FromResult(string.Empty);
        }
    }
}