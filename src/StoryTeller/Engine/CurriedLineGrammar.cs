using System;
using System.Collections.Generic;
using StoryTeller.Domain;
using System.Linq;
using StoryTeller.Rendering;

namespace StoryTeller.Engine
{
    public class CurriedLineGrammar : LineGrammar
    {
        private readonly IGrammarWithCells _inner;
        private readonly IDictionary<string, string> _defaults;

        /// <summary>
        /// Usage of defaults
        /// </summary>
        /// <param name="template"></param>
        /// <param name="inner"></param>
        /// <param name="defaults">key:value, key:value, key:value</param>
        public CurriedLineGrammar(string template, IGrammarWithCells inner, string defaults) : base(template)
        {
            _inner = inner;
            _defaults = Step.ParseValues(defaults);
        }

        public override string Description
        {
            get { return Template; }
        }

        public IGrammarWithCells Inner
        {
            get { return _inner; }
        }

        public override void Execute(IStep containerStep, ITestContext context)
        {
            _defaults.Each(x => containerStep.Set(x.Key, x.Value));
            _inner.ExecuteCurriedStep(containerStep, context);
        }

        public override IList<Cell> GetCells()
        {
            var keys = DisplayParser.GetKeys(Template);
            return _inner.GetCells().Where(cell =>
            {
                if (keys.Contains(cell.Key)) return true;

                if (_defaults.ContainsKey(cell.Key)) return false;

                return !cell.HasDefault();

            }).ToList();
        }

        
    }
}