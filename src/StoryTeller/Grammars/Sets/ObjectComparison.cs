using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using FubuCore.Reflection;
using StoryTeller.Conversion;
using StoryTeller.Model;

namespace StoryTeller.Grammars.Sets
{
    public class AccessorMatch
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

        public CellModifications CellModifications { get; private set; }

        public Cell BuildCell(CellHandling handling, Fixture fixture)
        {
            var cell = new Cell(handling, _accessor.Name, _accessor.PropertyType);
            CellModifications.Apply(cell);

            return cell;
        }
    }

    public class ObjectComparison<T> : ISetComparison
    {
        private readonly Func<ISpecContext, IEnumerable<T>> _source;
        private readonly IList<AccessorMatch> _accessors = new List<AccessorMatch>();

        public ObjectComparison(Func<ISpecContext, IEnumerable<T>> source)
        {
            _source = source;
        }

        public Task<StepValues[]> Fetch(ISpecContext context)
        {
            return Task.Factory.StartNew(() => _source(context).Select(x =>
            {
                var values = new StepValues("actual");
                _accessors.Each(a => values.Store(a.Accessor.Name, a.Accessor.GetValue(x)));

                return values;

            }).ToArray());
        }

        public Cell[] BuildCells(CellHandling handling, Fixture fixture)
        {
            return _accessors.Select(x => x.BuildCell(handling, fixture)).ToArray();
        }

        public ICellExpression Compare(Accessor accessor)
        {
            var accessorMatch = new AccessorMatch(accessor);
            _accessors.Add(accessorMatch);
            return accessorMatch.CellModifications;
        }

        /// <summary>
        /// At this point, Storyteller can use properties or method return
        /// values, but not public fields.
        /// </summary>
        /// <param name="expression"></param>
        /// <returns></returns>
        public ICellExpression Compare(Expression<Func<T, object>> expression)
        {
            var accessor = expression.ToAccessor();
            return Compare(accessor);
        }
    }
}