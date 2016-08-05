using System;
using System.Linq;
using Baseline;
using StoryTeller.Model;

namespace StoryTeller.Grammars.Sets
{
    public class SetVerificationGrammar : IGrammar
    {
        private readonly ISetComparison _comparison;
        private string _leafName;
        private readonly string _title;
        private Cell[] _cells;
        private bool _ordered;

        public SetVerificationGrammar(string title, string leafName, ISetComparison comparison)
        {
            _title = title;
            _leafName = leafName;
            _comparison = comparison;
            _ordered = false;
        }

        public IExecutionStep CreatePlan(Step step, FixtureLibrary library)
        {
            var section = step
                .Collections[_leafName];

            var expected = section
                .Children.OfType<Step>()
                .Select(row => _cells.ToStepValues(row))
                .ToArray();

            var matcher = _ordered ? OrderedSetMatcher.Flyweight : UnorderedSetMatcher.Flyweight;

            if (section.id.IsEmpty())
            {
                section.id = Guid.NewGuid().ToString();
            }

            return new VerificationSetPlan(section, matcher, _comparison, expected, _cells);
        }

        public GrammarModel Compile(Fixture fixture, CellHandling cells)
        {
            _cells = _comparison.BuildCells(cells, fixture);

            return new SetVerification
            {
                title = _title,
                cells = _cells,
                collection = _leafName,
                ordered = _ordered
            };
        }

        public SetVerificationGrammar Ordered()
        {
            _ordered = true;
            return this;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="leafName"></param>
        /// <returns></returns>
        public SetVerificationGrammar LeafNameIs(string leafName)
        {
            _leafName = leafName;
            return this;
        }

        public string Key { get; set; }
        public bool IsHidden { get; set; }

    }
}