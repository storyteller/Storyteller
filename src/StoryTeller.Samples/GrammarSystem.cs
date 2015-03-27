using System;
using System.Threading.Tasks;
using FubuCore;
using StoryTeller.Engine;

namespace StoryTeller.Samples
{
    public class GrammarSystem : ISystem
    {
        public readonly InMemoryServiceLocator Services = new InMemoryServiceLocator();

        public IExecutionContext CreateContext()
        {
            if (Project.CurrentProfile == "blowup")
            {
                throw new Exception("I blew up trying to create an execution context");
            }

            return new NulloSystem.SimpleExecutionContext(Services);
        }

        public Task Recycle()
        {
            return Task.FromResult("recycled");
        }


        public void Dispose()
        {
        }

        public CellHandling Start()
        {
            return CellHandling.Basic();
        }
    }
}