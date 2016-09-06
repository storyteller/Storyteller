using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using StoryTeller.Conversion;
using StoryTeller.Grammars.Lines;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.Grammars.Decisions
{
    public class TableLineGrammar : LineGrammar
    {
        private readonly List<IProperty> _properties = new List<IProperty>();
        private readonly IBeforeAndAfter _target;

        public TableLineGrammar(IBeforeAndAfter target)
        {
            _target = target;
            foreach (var property in target.GetType().GetTypeInfo().GetProperties())
            {
                if (property.DeclaringType == typeof (object) || property.DeclaringType.GetTypeInfo().Assembly == GetType().GetTypeInfo().Assembly)
                {
                    continue;
                }

                if (property.CanWrite)
                {
                    _properties.Add(new SetterProperty(property));
                }
                // Read only properties are assumed to be calculated
                else if (property.CanRead)
                {
                    _properties.Add(new GetterProperty(property));
                }

            }
        }

        public override IEnumerable<CellResult> Execute(StepValues values, ISpecContext context)
        {
            _target.BeforeLine();

            var results = _properties.Select(x => x.ProcessStep(values, context, _target)).ToArray();

            _target.AfterLine();

            return results;
        }

        protected override string format()
        {
            return "";
        }

        protected override IEnumerable<Cell> buildCells(CellHandling cellHandling, Fixture fixture)
        {
            return _properties.Select(x => x.CompileCell(cellHandling, fixture));
        }
    }
}