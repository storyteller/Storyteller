using System;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.Grammars
{
    public class EmbeddedSpecContext<T>: IEmbeddedSpecContext<T>
        where T : Fixture, new()
    {
        private readonly ISpecContext _specContext;
        private readonly T _fixture;

        public EmbeddedSpecContext(ISpecContext specContext, T fixture)
        {
            _specContext = specContext;
            _fixture = fixture;
        }

        public T Fixture => _fixture;

        public void Dispose()
        {
            _specContext.Dispose();
        }

        public TService Service<TService>()
        {
            return _specContext.Service<TService>();
        }

        public State State => _specContext.State;

        public Counts Counts => _specContext.Counts;

        public Specification Specification => _specContext.Specification;

        public Timings Timings => _specContext.Timings;

        public IReporting Reporting => _specContext.Reporting;

        public bool Wait(Func<bool> condition, TimeSpan timeout, int millisecondPolling = 500)
        {
            return _specContext.Wait(condition, timeout, millisecondPolling);
        }

        public void LogResult<TMessage>(TMessage result) where TMessage : IResultMessage
        {
            _specContext.LogResult(result);
        }

        public void LogException(string id, Exception ex, object position = null)
        {
            _specContext.LogException(id, ex, position);
        }
    }
}