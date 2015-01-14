using System;
using System.Collections.Generic;
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

        public GrammarModel Compile(Conversions conversions)
        {
            throw new NotImplementedException();
        }
    }
}