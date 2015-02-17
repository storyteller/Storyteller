using Storyteller.Core.Model.Persistence;
using Storyteller.Core.Results;

namespace Storyteller.Core
{
    public interface IResultObserver
    {
        void Handle<T>(T message) where T : IResultMessage;
        void SpecExecutionFinished(SpecNode node, Counts counts);
    }
}