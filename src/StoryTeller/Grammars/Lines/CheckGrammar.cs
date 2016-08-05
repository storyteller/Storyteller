using System;
using System.Collections.Generic;
using Baseline;
using StoryTeller.Conversion;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.Grammars.Lines
{
    public class CheckGrammar<T> : LineGrammar
    {
        private readonly string _key;
        private readonly Func<ISpecContext, T> _source;
        private Cell _cell;

        public CheckGrammar(string key, Func<ISpecContext, T> source)
        {
            _key = key;
            _source = source;
        } 

        public override IEnumerable<CellResult> Execute(StepValues values, ISpecContext context)
        {
            var actual = _source(context);

            yield return _cell.Check(values, actual);
        }

        protected override string format()
        {
            return "{0} should be {{{0}}}".ToFormat(_key);
        }

        protected override IEnumerable<Cell> buildCells(CellHandling cellHandling, Fixture fixture)
        {
            _cell = new Cell(cellHandling, _key, typeof (T))
            {
                output = true
            };
            return new [] {_cell};
        }
    }
}