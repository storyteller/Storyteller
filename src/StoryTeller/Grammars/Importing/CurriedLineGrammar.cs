using System.Collections.Generic;
using System.Linq;
using Baseline;
using StoryTeller.Grammars.Reflection;
using StoryTeller.Model;

namespace StoryTeller.Grammars.Importing
{
    public class CurriedLineGrammar : IGrammar
    {
        private readonly IDictionary<string, string> _defaults;
        private readonly IGrammar _inner;
        private readonly string _template;

        /// <summary>
        /// Usage of defaults
        /// </summary>
        /// <param name="template"></param>
        /// <param name="inner"></param>
        /// <param name="defaults">key:value, key:value, key:value</param>
        public CurriedLineGrammar(string template, IGrammar inner, string defaults)
        {
            _template = template;
            _inner = inner;
            _defaults = Step.ParseValues(defaults);
        }

        public IExecutionStep CreatePlan(Step step, FixtureLibrary library)
        {
            _defaults.Each(pair => step.Values[pair.Key] = pair.Value);
            return _inner.CreatePlan(step, library);
        }

        public GrammarModel Compile(Fixture fixture, CellHandling cells)
        {
            var inner = _inner.Compile(fixture, cells);
            var innerCells = inner.As<IModelWithCells>().cells;

            return new Sentence
            {
                cells = filterCells(innerCells).ToArray(),
                format = _template,
            };
        }

        public string Key { get; set; }


        protected Cell[] filterCells(IEnumerable<Cell> innerCells)
        {
            var keys = _template.ParseTemplateKeys();

            return innerCells.Where(cell =>
            {
                if (keys.Contains(cell.Key)) return true;

                if (_defaults.ContainsKey(cell.Key)) return false;

                return !cell.HasDefault();

            }).ToArray();
        }

        public bool IsHidden { get; set; }



    }
}