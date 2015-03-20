using StoryTeller.Model.Persistence;
using StoryTeller.Results;

namespace StoryTeller
{
    public interface IResultObserver
    {
        void Handle<T>(T message) where T : IResultMessage;
        void SpecExecutionFinished(SpecNode node, SpecResults results);
    }
}