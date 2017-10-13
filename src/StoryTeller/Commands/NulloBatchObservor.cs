using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using StoryTeller.Engine;
using StoryTeller.Model;

namespace StoryTeller.Commands
{
    public class NulloBatchObservor : IBatchObserver
    {
        public void SpecRequeued(SpecExecutionRequest request)
        {
        }

        public void SpecHandled(SpecExecutionRequest request, SpecResults results)
        {
        }

    }
}