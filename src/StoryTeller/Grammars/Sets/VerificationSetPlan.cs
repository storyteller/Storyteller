using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Baseline;
using StoryTeller.Conversion;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.Grammars.Sets
{
    public class VerificationSetPlan : ILineExecution
    {
        private readonly Cell[] _cells;
        private readonly long _maximumRuntimeInMilliseconds;
        private readonly ISetComparison _comparison;
        private readonly IEnumerable<StepValues> _expected;
        private readonly ISetMatcher _matcher;
        private readonly SetVerificationGrammar _grammar;
        private readonly Section _section;

        public VerificationSetPlan(SetVerificationGrammar grammar, Section section, ISetMatcher matcher, ISetComparison comparison, IEnumerable<StepValues> expected, Cell[] cells, long maximumRuntimeInMilliseconds)
        {
            _grammar = grammar;
            _section = section;
            _matcher = matcher;
            _comparison = comparison;
            _expected = expected;
            _cells = cells;
            _maximumRuntimeInMilliseconds = maximumRuntimeInMilliseconds;
        }

        public string Id => _section.id;

        public int Count()
        {
            return 1;
        }

        public void AcceptVisitor(ILineStepGatherer gatherer)
        {
            gatherer.Line(this);
        }

        private bool convertData(SpecContext context, PerfRecord record)
        {
            _expected.Each(x =>
            {
                x.DoDelayedConversions(context);
                if (!x.Errors.Any()) return;

                context.LogResult(x.ToConversionErrorResult(), record);
            });

            return _expected.All(x => !x.HasErrors());

        }

        public void Execute(SpecContext context)
        {
            ExecuteAsync(context, default(CancellationToken)).Wait();
        }

        public Task ExecuteAsync(SpecContext context, CancellationToken cancellation)
        {
            var record = context.Timings.Subject("Grammar", _grammar.Key, _maximumRuntimeInMilliseconds);


            var fetch = _comparison.Fetch(context);

            if (!convertData(context, record))
            {
                return Task.CompletedTask;
            }


            return fetch.ContinueWith(t =>
            {
                if (t.IsFaulted)
                {
                    // TODO -- do the Flatten() trick here on the aggregated exception
                    context.LogException(_section.id, t.Exception, record, Stage.before);

                    return;
                }

                if (t.IsCompleted)
                {
                    var result = CreateResults(_expected, t.Result);
                    result.id = _section.id;
                    context.LogResult(result, record);

                    context.Timings.End(record, result);
                }
            }, cancellation);
        }

        public object Position { get; set; }

        public SetVerificationResult CreateResults(IEnumerable<StepValues> expected, IEnumerable<StepValues> actual)
        {
            var result = _matcher.Match(_cells, expected, actual);
            result.id = _section.id;

            return result;
        }
    }
}