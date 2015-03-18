using Storyteller.Core.Model.Persistence;
using Storyteller.Core.Results;

namespace Storyteller.Core
{
    public class NulloResultObserver : IResultObserver
    {
        public void Handle<T>(T message) where T : IResultMessage
        {
            // Nothing
        }

        public void SpecExecutionFinished(SpecNode node, SpecResults results)
        {
            // Nothing
        }
    }
}