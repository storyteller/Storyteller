using System;
using System.Collections.Generic;
using Storyteller.Core.Conversion;
using Storyteller.Core.Results;

namespace Storyteller.Core.Grammars.Lines
{
    public class ActionGrammar : LineGrammar
    {
        private readonly Action<ISpecContext> _action;
        private readonly string _label;

        public ActionGrammar(string label, Action<ISpecContext> action)
        {
            _label = label;
            _action = action;
        }

        public override IEnumerable<CellResult> Execute(StepValues values, ISpecContext context)
        {
            _action(context);

            return null;
        }
    }
}