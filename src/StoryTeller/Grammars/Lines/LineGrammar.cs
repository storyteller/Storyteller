using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using StoryTeller.Conversion;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.Grammars.Lines
{
    public abstract class LineGrammar : ILineGrammar
    {
        protected Cell[] _cells;

        public IExecutionStep CreatePlan(Step step, FixtureLibrary library, bool inTable = false)
        {
            var stepValues = _cells.ToStepValues(step);

            return new LineStep(stepValues, this);
        }

        public abstract IEnumerable<CellResult> Execute(StepValues values, ISpecContext context);

        protected abstract string format();

        protected virtual IEnumerable<Cell> buildCells(CellHandling cellHandling, Fixture fixture)
        {
            return Enumerable.Empty<Cell>();
        }

        public GrammarModel Compile(Fixture fixture, CellHandling cells)
        {
            // Let the UI handle the format errors
            _cells = buildCells(cells, fixture).ToArray();
            return new Sentence
            {
                cells = _cells,
                format = format()
            };
        }

        public string Key { get; set; }

        public bool IsHidden { get; set; }

        public virtual Task<IEnumerable<CellResult>> ExecuteAsync(StepValues values, ISpecContext context)
        {
            throw new NotSupportedException();
        }

        public virtual bool IsAsync()
        {
            return false;
        }

        public long MaximumRuntimeInMilliseconds { get; set; }
    }
}