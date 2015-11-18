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
    public class ObjectComparison<T> : ISetComparison
    {
        private readonly Func<ISpecContext, IEnumerable<T>> _source;
        private readonly IList<IColumnMatch> _accessors = new List<IColumnMatch>();

        public ObjectComparison(Func<ISpecContext, IEnumerable<T>> source)
        {
            _source = source;
        }

        public Task<StepValues[]> Fetch(ISpecContext context)
        {
            return Task.Factory.StartNew(() => _source(context).Select(x =>
            {
                var values = new StepValues("actual");
                _accessors.Each(a => values.Store(a.Name, a.GetValue(x)));

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