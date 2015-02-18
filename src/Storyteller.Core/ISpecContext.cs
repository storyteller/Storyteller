using System;
using System.Threading;
using Storyteller.Core.Results;

namespace Storyteller.Core
{
    public interface ISpecContext : IDisposable
    {
        bool CanContinue();
        bool Wait(Func<bool> condition, TimeSpan timeout, int millisecondPolling = 500);
        void LogResult<T>(T result) where T : IResultMessage;
        void LogException(string id, Exception ex, object position = null);
        T Service<T>();

        State State { get; }
        CancellationToken Cancellation { get; }
        void RequestCancellation();

        Counts Counts { get; }


    }
}