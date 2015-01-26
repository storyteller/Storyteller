using System;
using System.Collections.Generic;
using System.Linq;
using FubuCore;
using Storyteller.Core.Conversion;
using Storyteller.Core.Engine;
using Storyteller.Core.Grammars.Lines;
using Storyteller.Core.Grammars.Reflection;
using Storyteller.Core.Model;

namespace Storyteller.Core.Grammars.Importing
{
    public class ImportedGrammar : IGrammar
    {
        private readonly Fixture _fixture;
        private readonly IGrammar _inner;

        public ImportedGrammar(Fixture fixture, IGrammar inner)
        {
            _fixture = fixture;
            _inner = inner;
        }

        public IExecutionStep CreatePlan(Step step, FixtureLibrary library)
        {
            var innerPlan = _inner.CreatePlan(step, library);
            return new ImportedExecutionStep(_fixture, innerPlan);
        }

        public GrammarModel Compile(CellHandling cells)
        {
            return _inner.Compile(cells);
        }

        
        public ImportedGrammar Curry(CurryAction curryAction)
        {
            // TODO -- you know, do something here
            return this;
        }
         
    }

    public class CurryAction
    {
        public string Template { get; set; }
        public string DefaultValues { get; set; }
    }

    public class ImportedExecutionStep : IExecutionStep
    {
        private readonly Fixture _innerFixture;
        private readonly IExecutionStep _inner;

        public ImportedExecutionStep(Fixture innerFixture, IExecutionStep inner)
        {
            _innerFixture = innerFixture;
            _inner = inner;
        }

        public int Count()
        {
            return _inner.Count();
        }

        public void AcceptVisitor(ISpecExecutor executor)
        {
            _innerFixture.Context = executor.CurrentContext;
            _inner.AcceptVisitor(executor);
        }
    }

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
            // put the defaults into the Step first, then delegate to the inner grammar
            throw new System.NotImplementedException();
        }

        public GrammarModel Compile(CellHandling cells)
        {
            var model = _inner.Compile(cells).As<IModelWithCells>();
            throw new NotImplementedException();
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