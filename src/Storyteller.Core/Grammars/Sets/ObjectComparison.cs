using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using FubuCore.Reflection;
using Storyteller.Core.Conversion;
using Storyteller.Core.Model;

namespace Storyteller.Core.Grammars.Sets
{
    public class ObjectComparison<T> : ISetComparison
    {
        private readonly Func<ISpecContext, IEnumerable<T>> _source;
        private readonly IList<Accessor> _accessors = new List<Accessor>();

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
            return _accessors.Select(x => new Cell(handling, fixture, x.Name, x.PropertyType)).ToArray();
        }

        public ObjectComparison<T> Compare(Accessor accessor)
        {
            _accessors.Add(accessor);
            return this;
        }

        public ObjectComparison<T> MatchOn(Expression<Func<T, object>> expression)
        {
            var accessor = expression.ToAccessor();
            Compare(accessor);

            return this;
        }
    }
}