using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using StoryTeller.Engine.Reflection;
using StoryTeller.Rendering;

namespace StoryTeller.Engine
{
    public class ValueCheckMethod : ReflectionGrammar
    {
        private readonly List<Cell> _cells;

        public ValueCheckMethod(MethodInfo method, object target)
            : base(method, target)
        {
            Cell[] argumentCells = _method.GetArgumentCells();
            Cell returnCell = _method.GetReturnCell();
            _cells = new List<Cell>(argumentCells)
            {
                returnCell
            };

            var keys = DisplayParser.GetKeys(Template).ToList();

            var argKeys = argumentCells.Select(x => x.Key);
            keys.RemoveAll(key => argKeys.Contains(key));

            if (keys.Count == 1)
            {
                returnCell.Key = keys[0];
            }
        }

        public override IList<Cell> GetCells()
        {
            return _cells;
        }
    }
}