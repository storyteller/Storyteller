using System;
using System.Threading;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller
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
        Specification Specification { get; }

        Timings Timings { get; }
        Reporter Reporting { get; }
        bool HadCatastrophicException { get; }
        bool HadCriticalException { get; }
        SpecResults FinalizeResults(int attempts);
    }
}