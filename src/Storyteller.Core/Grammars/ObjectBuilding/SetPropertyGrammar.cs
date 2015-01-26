using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using FubuCore;
using FubuCore.Reflection;
using Storyteller.Core.Conversion;
using Storyteller.Core.Grammars.Lines;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core.Grammars.ObjectBuilding
{
    public class SetPropertyGrammar : LineGrammar
    {
        private readonly Accessor _accessor;
        private readonly string _template;
        private Cell _cell;

        public SetPropertyGrammar(Accessor accessor)
        {
            _accessor = accessor;
            _template = "{0} = {{{0}}}".ToFormat(_accessor.Name);
        }

        public string DefaultValue { get; set; }

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
            _cell = new Cell(cellHandling, fixture, _accessor.Name, _accessor.PropertyType)
            {
                DefaultValue = DefaultValue
            };
            return new[] {_cell};
        }

        public static SetPropertyGrammar For<T>(Expression<Func<T, object>> expression)
        {
            return new SetPropertyGrammar(expression.ToAccessor());
        }

    }
}