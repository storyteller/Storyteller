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

        public EmbeddedSpecContext(ISpecContext specContext, T fixture)
        {
            _specContext = specContext;
            Fixture = fixture;
        }

        public T Fixture { get; }

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

        public void LogResult<TMessage>(TMessage result, PerfRecord record) where TMessage : IResultMessage
        {
            _specContext.LogResult(result, record);
        }

        public void LogException(string id, Exception ex, PerfRecord record, object position = null)
        {
            _specContext.LogException(id, ex, record, position);
        }
    }
}