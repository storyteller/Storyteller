using Storyteller.Core.Grammars;
using Storyteller.Core.Results;

namespace Storyteller.Core
{
    public interface IObserver
    {
        
        void Handle<T>(T message) where T : IResultMessage;
    }
}