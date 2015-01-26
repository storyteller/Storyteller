using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using FubuCore;
using FubuCore.Reflection;
using Storyteller.Core.Conversion;
using Storyteller.Core.Grammars.Lines;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core.Grammars
{
    // TODO -- add default values here
    public class CheckPropertyGrammar : LineGrammar
    {
        private readonly Accessor _accessor;
        private Cell _cell;

        public CheckPropertyGrammar(Accessor accessor)
        {
            _accessor = accessor;
        }

        public override IEnumerable<CellResult> Execute(StepValues values, ISpecContext context)
        {
            var actual = _accessor.GetValue(context.State.CurrentObject);
            var expected = values.Get(_cell.Key);

            if (expected.Equals(actual))
            {
                yield return CellResult.Success(_cell.Key);
            }
            else
            {
                yield return CellResult.Failure(_cell.Key, actual.ToString());
            }
        }

        protected override string format()
        {
            return "{0} should be {{{0}}}".ToFormat(_accessor.Name);
        }

        protected override IEnumerable<Cell> buildCells(CellHandling cellHandling)
        {
            _cell = Cell.For(cellHandling, _accessor);
            return new[] {_cell};
        }




        public static CheckPropertyGrammar For<T>(Expression<Func<T, object>> expression)
        {
            Accessor accessor = ReflectionHelper.GetAccessor(expression);
            return new CheckPropertyGrammar(accessor);
        }


    }
}