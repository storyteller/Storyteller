using System.Linq;
using System.Threading.Tasks;
using StoryTeller.Conversion;
using StoryTeller.Results;

namespace StoryTeller.Grammars
{
    public class LineStep : LineStepBase, IWithValues
    {
        private readonly ILineGrammar _grammar;

        public LineStep(StepValues values, ILineGrammar grammar) : base(values)
        {
            _grammar = grammar;
        }

        protected override StepResult execute(ISpecContext context)
        {
            var cellResults = _grammar.Execute(Values, context);

            var result = new StepResult(Values.id, ResultStatus.ok)
            {
                cells = cellResults.ToArray()
            };

            return result;
        }

        public override string Subject => _grammar.Key;

        protected override async Task<StepResult> executeAsync(ISpecContext context)
        {
            var cellResults = await _grammar.ExecuteAsync(Values, context).ConfigureAwait(false);

            var result = new StepResult(Values.id, ResultStatus.ok)
            {
                cells = cellResults.ToArray()
            };

            return result;
        }

        protected override bool IsAsync() => _grammar.IsAsync();
        protected override long maximumRuntimeInMilliseconds => _grammar.MaximumRuntimeInMilliseconds;
    }
}