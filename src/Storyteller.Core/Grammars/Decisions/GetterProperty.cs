using System.Reflection;
using Storyteller.Core.Conversion;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core.Grammars.Decisions
{
    public class GetterProperty : IProperty
    {
        private readonly PropertyInfo _property;
        private Cell _cell;

        public GetterProperty(PropertyInfo property)
        {
            _property = property;
        }

        public CellResult ProcessStep(StepValues step, ISpecContext context, object target)
        {
            object actual = _property.GetValue(target, null);
            return _cell.Check(step, actual);
        }

        public Cell CompileCell(CellHandling cellHandling, Fixture fixture)
        {
            _cell = Cell.For(cellHandling, _property, fixture);
            _cell.output = true;

            return _cell;
        }
    }
}