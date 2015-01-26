using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Storyteller.Core.Conversion;
using Storyteller.Core.Model;

namespace Storyteller.Core.Grammars.Sets
{
    public class StringListComparison : ISetComparison
    {
        private readonly string _key;
        private readonly Func<ISpecContext, IEnumerable<string>> _source;

        public StringListComparison(string key, Func<ISpecContext, IEnumerable<string>> source)
        {
            _key = key;
            _source = source;
        }

        public Task<StepValues[]> Fetch(ISpecContext context)
        {
            return Task.Factory.StartNew(() => _source(context).Select(x =>
            {
                var values = new StepValues("actual");
                values.Store(_key, x);

                return values;

            }).ToArray());
        }

        public Cell[] BuildCells(CellHandling handling, Fixture fixture)
        {
            return new[]{new Cell(handling, fixture, _key, typeof(string)) };
        }
    }
}