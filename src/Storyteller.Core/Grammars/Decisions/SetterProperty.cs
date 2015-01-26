using System.Reflection;
using Storyteller.Core.Conversion;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core.Grammars.Decisions
{
    public class SetterProperty : IProperty
    {
        private readonly PropertyInfo _property;

        public SetterProperty(PropertyInfo property)
        {
            _property = property;
        }

        public CellResult ProcessStep(StepValues step, ISpecContext context, object target)
        {
            var actual = step.Get(_property.Name);
            _property.SetValue(target, actual);

            return CellResult.Ok(_property.Name);
        }

        public Cell CompileCell(CellHandling cellHandling)
        {
            return Cell.For(cellHandling, _property);
        }
    }
}