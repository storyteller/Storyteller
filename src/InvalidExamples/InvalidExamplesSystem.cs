using System;
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

        public void Recycle()
        {
            throw new NotImplementedException();
        }
    }
}
