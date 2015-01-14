using System;
using Storyteller.Core.Results;

namespace Storyteller.Core
{
    public interface ISpecContext
    {
        // TODO -- if the token is cancelled, if it's hit a critical exception, if the timeout is done
        // TODO -- if the stop conditions have been met (Later)
        bool CanContinue();
        bool Wait(Func<bool> condition, TimeSpan timeout);
        void LogResult<T>(T result) where T : IResultMessage;
        void LogException(string id, Exception ex, object position = null);
    }
}