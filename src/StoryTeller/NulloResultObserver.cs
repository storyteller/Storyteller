using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Results;

namespace StoryTeller
{
    public class NulloResultObserver : IResultObserver
    {
        public void Handle<T>(T message) where T : IResultMessage
        {
            // Nothing
        }

        public void SpecExecutionFinished(Specification specification, SpecResults results)
        {
            // Nothing
        }
    }
}