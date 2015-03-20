using System.Collections.Generic;
using System.Linq;
using StoryTeller.Conversion;
using StoryTeller.Engine;
using StoryTeller.Model;

namespace StoryTeller.Grammars.Sets
{
    public class VerificationSetPlan : ILineExecution
    {
        private readonly Cell[] _cells;
        private readonly ISetComparison _comparison;
        private readonly IEnumerable<StepValues> _expected;
        private readonly ISetMatcher _matcher;
        private readonly Section _section;

        public VerificationSetPlan(Section section, ISetMatcher matcher, ISetComparison comparison,
            IEnumerable<StepValues> expected, Cell[] cells)
        {
            _section = section;
            _matcher = matcher;
            _comparison = comparison;
            _expected = expected;
            _cells = cells;
        }

        public int Count()
        {
            return 1;
        }

        public void AcceptVisitor(IStepExecutor executor)
        {
            executor.Line(this);
        }

        public void Execute(ISpecContext context)
        {
            using (context.Timings.Subject("Grammar", _section.Key))
            {
                var fetch = _comparison.Fetch(context);

                _expected.Each(x =>
                {
                    x.DoDelayedConversions(context);
                    if (!x.Errors.Any()) return;

                    context.LogResult(x.ToConversionErrorResult());
                });

                if (_expected.Any(x => x.HasErrors())) return;

                fetch.ContinueWith(t =>
                {
                    if (t.IsFaulted)
                    {
                        // TODO -- do the Flatten() trick here on the aggregated exception
                        context.LogException(_section.Id, t.Exception);
                        return;
                    }

                    if (t.IsCompleted)
                    {
                        var result = CreateResults(_expected, t.Result);
                        result.id = _section.Id;
                        context.LogResult(result);
                        return;
                    }
                }).Wait(context.Cancellation);
            }


        }

        public object Position { get; set; }

        public SetVerificationResult CreateResults(IEnumerable<StepValues> expected, IEnumerable<StepValues> actual)
        {
            var result = _matcher.Match(_cells, expected, actual);
            result.id = _section.Id;

            return result;
        }
    }
}