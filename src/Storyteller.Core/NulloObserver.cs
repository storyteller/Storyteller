using Storyteller.Core.Grammars;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core
{
    public class NulloObserver : IObserver
    {
        public void SpecExecutionFinished(ISpecContext context, SpecificationPlan plan)
        {
            // Nothing
        }

        public void Handle<T>(T message) where T : IResultMessage
        {
            // Nothing
        }

        public void FixturesRead(FixtureLibrary library)
        {
            // Nothing
        }

        public void SpecHandled(string id)
        {
            // Nothing
        }

        public void SpecRequeued(SpecificationPlan plan, ISpecContext context)
        {
            // Nothing
        }
    }
}