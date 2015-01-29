using Storyteller.Core.Grammars;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core
{
    public class NulloObserver : IObserver
    {
        public void SpecFinished(ISpecContext context, SpecificationPlan plan)
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
    }
}