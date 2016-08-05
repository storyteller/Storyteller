using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using Baseline;
using Baseline.Reflection;
using StoryTeller.Conversion;
using StoryTeller.Grammars.Lines;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.Grammars.ObjectBuilding
{
    public class SetPropertyGrammar : LineGrammar
    {
        private readonly Accessor _accessor;
        private readonly string _template;
        private Cell _cell;

        internal SetPropertyGrammar(Accessor accessor)
        {
            _accessor = accessor;
            _template = "{0} = {{{0}}}".ToFormat(_accessor.Name);
            CellModifications = new CellModifications();
        }

        public SetPropertyGrammar(PropertyInfo property) : this(new SingleProperty(property)) { }

        public CellModifications CellModifications { get; private set; }

        public override IEnumerable<CellResult> Execute(StepValues values, ISpecContext context)
        {
            var value = values.Get(_cell.Key);
            _accessor.SetValue(context.State.CurrentObject, value);

            return Enumerable.Empty<CellResult>();
        }

        protected override string format()
        {
            return _template;
        }

        protected override IEnumerable<Cell> buildCells(CellHandling cellHandling, Fixture fixture)
        {
            _cell = new Cell(cellHandling, _accessor.Name, _accessor.PropertyType);
            CellModifications.Apply(_cell);

            return new[] {_cell};
        }

        public static SetPropertyGrammar For<T>(Expression<Func<T, object>> expression)
        {
            return new SetPropertyGrammar(expression.ToAccessor());
        }

    }
}