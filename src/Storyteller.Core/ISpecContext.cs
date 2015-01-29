using System;
using System.Threading;
using Storyteller.Core.Results;

namespace Storyteller.Core
{
    public interface ISpecContext
    {
        bool CanContinue();
        bool Wait(Func<bool> condition, TimeSpan timeout);
        void LogResult<T>(T result) where T : IResultMessage;
        void LogException(string id, Exception ex, object position = null);
        T Service<T>();

        State State { get; }
        CancellationToken Cancellation { get; }
        void RequestCancellation();
    }
}