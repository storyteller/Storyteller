using System.Collections.Generic;
using System.Linq;
using Storyteller.Core.Conversion;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core.Grammars.Lines
{
    public abstract class LineGrammar : ILineGrammar
    {
        private Cell[] _cells;

        public IExecutionStep CreatePlan(Step step, FixtureLibrary library)
        {
            var stepValues = new StepValues(step.Id);
            _cells.Each(x => x.ConvertValues(step, stepValues));

            return new LineStep(stepValues, this);
        }

        public abstract IEnumerable<CellResult> Execute(StepValues values, ISpecContext context);

        protected abstract string format();

        protected virtual IEnumerable<Cell> buildCells(Conversions conversions)
        {
            return Enumerable.Empty<Cell>();
        }

        public GrammarModel Compile(Conversions conversions)
        {
            // Let the UI handle the format errors
            _cells = buildCells(conversions).ToArray();
            return new Sentence
            {
                cells = _cells,
                format = format()
            };
        }
    }
}