using System;
using System.Collections.Generic;
using System.Threading;
using FubuCore;
using Storyteller.Core.Results;

namespace Storyteller.Core
{
    public class SpecContext : ISpecContext, IDisposable
    {
        public readonly Counts Counts = new Counts();
        public readonly IList<IResultMessage> Results = new List<IResultMessage>();
        private readonly CancellationToken _cancellation;
        private readonly CancellationTokenSource _cancellationSource;
        private readonly IObserver _observer;
        private readonly IServiceLocator _services;
        private readonly State _state = new State();
        private bool _hasCatastrophicException;
        private bool _hasCriticalException;

        public SpecContext(IObserver observer, StopConditions stopConditions, IServiceLocator services)
        {
            _observer = observer;
            StopConditions = stopConditions;
            _cancellationSource = stopConditions.CreateCancellationSource();
            _cancellation = _cancellationSource.Token;
            _services = services;
        }

        public StopConditions StopConditions { get; private set; }

        public void Dispose()
        {
            _state.Dispose();
        }

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

        // TODO -- need to implement this
        public bool Wait(Func<bool> condition, TimeSpan timeout)
        {
            throw new NotImplementedException();
        }

        public T Service<T>()
        {
            return _services.GetInstance<T>();
        }

        public State State
        {
            get { return _state; }
        }

        public void LogResult<T>(T result) where T : IResultMessage
        {
            if (result.id.IsEmpty())
                throw new ArgumentOutOfRangeException("result", "The id of the result cannot be empty");

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

        public static SpecContext Basic()
        {
            return new SpecContext(new NulloObserver(), new StopConditions(), new InMemoryServiceLocator());
        }

        public static SpecContext ForTesting()
        {
            SpecContext context = Basic();

            return context;
        }

        // TODO -- this has to be called at some point in the 
        // execution pipeline
    }
}