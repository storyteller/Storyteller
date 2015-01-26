using System;
using System.Collections.Generic;
using System.Linq;
using Storyteller.Core.Conversion;
using Storyteller.Core.Grammars.Reflection;
using Storyteller.Core.Model;
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

            yield break;
        }

        protected override string format()
        {
            return _label;
        }
    }

    public class ActionGrammar<T> : LineGrammar
    {
        private readonly string _label;
        private readonly Action<T, ISpecContext> _action;
        private Cell _cell;

        public ActionGrammar(string label, Action<T, ISpecContext> action)
        {
            _label = label;
            _action = action;
        }

        public override IEnumerable<CellResult> Execute(StepValues values, ISpecContext context)
        {
            T value = (T) values.Get(_cell.Key);
            _action(value, context);

            return Enumerable.Empty<CellResult>();
        }

        protected override string format()
        {
            return _label;
        }

        protected override IEnumerable<Cell> buildCells(CellHandling cellHandling, Fixture fixture)
        {
            // TODO -- make the exception message on garbage input nicer
            var key = _label.ParseTemplateKeys().Single();
            _cell = new Cell(cellHandling, key, typeof (T));

            return new[] {_cell};
        }
    }
}