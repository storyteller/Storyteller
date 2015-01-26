using System.Linq;
using Storyteller.Core.Conversion;
using Storyteller.Core.Results;

namespace Storyteller.Core.Grammars
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

            var result = new StepResult(Values.Id, ResultStatus.ok)
            {
                cells = cellResults.ToArray()
            };

            return result;
        }


    }
}