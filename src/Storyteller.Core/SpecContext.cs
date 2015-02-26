using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Threading;
using FubuCore;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core
{
    public class SpecContext : ISpecContext
    {
        public readonly IList<IResultMessage> Results = new List<IResultMessage>();
        private readonly CancellationToken _cancellation;
        private readonly CancellationTokenSource _cancellationSource;
        private readonly IResultObserver _resultObserver;
        private IServiceLocator _services;
        private readonly State _state = new State();
        private bool _hasCatastrophicException;
        private bool _hasCriticalException;

        // TODO -- take in the specification id, or maybe just the Specification
        public SpecContext(IResultObserver observer, StopConditions stopConditions, IServiceLocator services)
        {
            Counts = new Counts();
            _resultObserver = observer;
            StopConditions = stopConditions;
            _cancellationSource = stopConditions.CreateCancellationSource();
            _cancellation = _cancellationSource.Token;
            _services = services;
        }

        public StopConditions StopConditions { get; private set; }


        public void Dispose()
        {
            _state.Dispose();
            _services = null;
        }

        public Counts Counts { get; private set; }

        public void RequestCancellation()
        {
            _cancellationSource.Cancel();
        }

        public CancellationToken Cancellation
        {
            get { return _cancellation; }
        }

        public bool CanContinue()
        {
            if (_hasCriticalException || _hasCatastrophicException || _cancellation.IsCancellationRequested)
                return false;

            return StopConditions.CanContinue(Counts);
        }

        public bool Wait(Func<bool> condition, TimeSpan timeout, int millisecondPolling = 500)
        {
            if (Cancellation.IsCancellationRequested) return false;
            if (condition()) return true;

            var clock = new Stopwatch();
            clock.Start();

            try
            {
                while (clock.Elapsed < timeout && !Cancellation.IsCancellationRequested)
                {
                    Thread.Yield();
                    Thread.Sleep(millisecondPolling);

                    if (condition()) return true;
                }

                return false;
            }
            finally
            {
                clock.Stop();
            }
        }

        public T Service<T>()
        {
            return _services.GetInstance<T>();
        }

        public State State
        {
            get { return _state; }
        }

        public string Id { get; set; }

        public void LogResult<T>(T result) where T : IResultMessage
        {
            if (result.id.IsEmpty())
                throw new ArgumentOutOfRangeException("result", "The id of the result cannot be empty");

            result.spec = Id;

            _resultObserver.Handle(result);
            result.Tabulate(Counts);
            Results.Add(result);
        }

        public void LogException(string id, Exception ex, object position = null)
        {
            if (ex is StorytellerCriticalException)
            {
                _hasCriticalException = true;

                // TODO  -- hokey. Watch if this becomes a pattern
                if (ex.InnerException is MissingFixtureException)
                {
                    LogResult(new StepResult(id, ResultStatus.invalid)
                    {
                        error = ex.InnerException.Message,
                        position = position
                    });
                    return;
                }
            }
            if (ex is StorytellerCatastrophicException) _hasCatastrophicException = true;

            LogResult(new StepResult(id, ResultStatus.error) {error = ex.ToString(), position = position});
        }

        public static SpecContext Basic()
        {
            return new SpecContext(new NulloResultObserver(), new StopConditions(), new InMemoryServiceLocator());
        }

        public static SpecContext ForTesting()
        {
            SpecContext context = Basic();

            return context;
        }
    }
}