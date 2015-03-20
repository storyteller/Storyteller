using System.Reflection;
using StoryTeller.Conversion;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.Grammars.Decisions
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

        public Cell CompileCell(CellHandling cellHandling, Fixture fixture)
        {
            return Cell.For(cellHandling, _property, fixture);
        }
    }
}