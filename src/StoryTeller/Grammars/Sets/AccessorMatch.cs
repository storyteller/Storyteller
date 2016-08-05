using Baseline.Reflection;
using StoryTeller.Model;

namespace StoryTeller.Grammars.Sets
{
    public class AccessorMatch : IColumnMatch
    {
        private readonly Accessor _accessor;

        public AccessorMatch(Accessor accessor)
        {
            _accessor = accessor;
            CellModifications = new CellModifications();
        }

        public Accessor Accessor
        {
            get { return _accessor; }
        }

        public string Name
        {
            get { return _accessor.Name; }
        }

        public object GetValue(object actual)
        {
            return _accessor.GetValue(actual);
        }

        public CellModifications CellModifications { get; private set; }

        public Cell BuildCell(CellHandling handling, Fixture fixture)
        {
            var cell = new Cell(handling, _accessor.Name, _accessor.PropertyType);
            CellModifications.Apply(cell);

            return cell;
        }
    }

}