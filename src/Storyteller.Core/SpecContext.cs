using System;
using System.Collections.Generic;
using System.Threading;
using FubuCore;
using Storyteller.Core.Engine;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core
{
    public interface IExecutionObserver
    {
        void Handle<T>(T message) where T : IResultMessage;
    }

    public class NulloExecutionObserver : IExecutionObserver
    {
        public void Handle<T>(T message) where T : IResultMessage
        {
            // Nothing
        }
    }

    public class RecordingExecutionObserver : IExecutionObserver
    {
        public readonly IList<IResultMessage> Messages = new List<IResultMessage>();

        public void Handle<T>(T message) where T : IResultMessage
        {
            Messages.Add(message);
        }
    }

    public class StopConditions
    {
        public bool BreakOnExceptions;
        public bool BreakOnWrongs;
        public int TimeoutInSeconds = 60;

        // TODO -- break on a specific step
        
        public bool CanContinue(Counts counts)
        {
            if (BreakOnExceptions && counts.Exceptions > 0) return false;
            if (BreakOnWrongs && counts.Wrongs > 0) return false;

            return true;
        }
    }

    public class SpecContext : ISpecContext
    {
        private readonly IExecutionObserver _observer;
        private readonly CancellationToken _cancellation;
        private bool _hasCriticalException = false;
        private bool _hasCatastrophicException = false;

        public static SpecContext Basic()
        {
            return new SpecContext(new NulloExecutionObserver(), new CancellationTokenSource().Token);
        }

        public static SpecContext ForTesting()
        {
            var context = Basic();

            return context;
        }

        // TODO -- make this settable later
        public readonly StopConditions StopConditions = new StopConditions();
        public readonly IList<IResultMessage> Results = new List<IResultMessage>();

        public readonly Counts Counts = new Counts();

        public SpecContext(IExecutionObserver observer, CancellationToken cancellation)
        {
            _observer = observer;
            _cancellation = cancellation;
        }

        public bool CanContinue()
        {
            if (_hasCriticalException || _hasCatastrophicException || _cancellation.IsCancellationRequested) return false;

            return StopConditions.CanContinue(Counts);
        }

        public bool Wait(Func<bool> condition, TimeSpan timeout)
        {
            throw new NotImplementedException();
        }

        public void LogResult<T>(T result) where T : IResultMessage
        {
            if (result.id.IsEmpty()) throw new ArgumentOutOfRangeException("result", "The id of the result cannot be empty");

            _observer.Handle(result);
            result.Tabulate(Counts);
            Results.Add(result);
        }

        public void LogException(string id, Exception ex, object position = null)
        {
            if (ex is StorytellerCriticalException) _hasCriticalException = true;
            if (ex is StorytellerCatastrophicException) _hasCatastrophicException = true;

            LogResult(new StepResult(id, ResultStatus.error) {error = ex.ToString(), position = position});
        }

    }
}