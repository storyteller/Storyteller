using System;
using System.Collections.Generic;
using System.Linq;
using Storyteller.Core.Conversion;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core.Grammars.Lines
{
    public abstract class LineGrammar : ILineGrammar
    {
        public IExecutionStep CreatePlan(Step step, FixtureLibrary library)
        {
            return new LineStep(new StepValues(step.Id), this);
        }

        public abstract IEnumerable<CellResult> Execute(StepValues values, ISpecContext context);

        protected abstract string format();

        protected virtual IEnumerable<Cell> cells(Conversions conversions)
        {
            return Enumerable.Empty<Cell>();
        }

        public GrammarModel Compile(Conversions conversions)
        {
            // Let the UI handle the format errors
            return new Sentence
            {
                cells = cells(conversions).ToArray(),
                format = format()
            };
        }
    }
}