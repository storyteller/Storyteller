using System;
using FubuCore.Conversion;
using StoryTeller.Engine;
using StructureMap;

namespace StoryTeller.Samples
{
    public class GrammarSystem : ISystem
    {
        public T Get<T>() where T : class
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

        public void Dispose()
        {
            throw new NotImplementedException();
        }
    }



}