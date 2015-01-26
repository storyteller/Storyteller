using System;
using System.Collections.Generic;
using System.Linq;
using FubuCore;
using Storyteller.Core.Conversion;
using Storyteller.Core.Grammars.Lines;
using Storyteller.Core.Grammars.Reflection;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core.Grammars.Importing
{
    public class CurriedLineGrammar : IGrammar
    {
        private readonly IDictionary<string, string> _defaults;
        private readonly LineGrammar _inner;
        private readonly string _template;

        /// <summary>
        /// Usage of defaults
        /// </summary>
        /// <param name="template"></param>
        /// <param name="inner"></param>
        /// <param name="defaults">key:value, key:value, key:value</param>
        public CurriedLineGrammar(string template, LineGrammar inner, string defaults)
        {
            _template = template;
            _inner = inner;
            _defaults = Step.ParseValues(defaults);
        }

        public IExecutionStep CreatePlan(Step step, FixtureLibrary library)
        {
            throw new System.NotImplementedException();
        }

        public GrammarModel Compile(CellHandling cells)
        {
            var model = _inner.Compile(cells).As<IModelWithCells>();
            throw new NotImplementedException();
        }

        private void applyDefaults(StepValues values)
        {
            _defaults.Each(pair => values.Store(pair.Key, pair.Value));
        }

        protected IEnumerable<Cell> buildCells(CellHandling cellHandling)
        {
            var keys = _template.ParseTemplateKeys();
            var model = _inner.Compile(cellHandling).As<IModelWithCells>();

            return model.cells.Where(cell =>
            {
                if (keys.Contains(cell.Key)) return true;

                if (_defaults.ContainsKey(cell.Key)) return false;

                return !cell.HasDefault();

            }).ToList();
        }




        
    }
}