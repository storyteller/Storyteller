using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller
{
    public interface IResultObserver
    {
        void Handle<T>(T message) where T : IResultMessage;
        void SpecExecutionFinished(Specification specification, SpecResults results);
    }
}