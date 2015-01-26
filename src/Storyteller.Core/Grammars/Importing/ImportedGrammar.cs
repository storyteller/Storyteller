using System;
using Storyteller.Core.Conversion;
using Storyteller.Core.Grammars.Lines;
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

        public GrammarModel Compile(Fixture fixture, CellHandling cells)
        {
            return _inner.Compile(fixture, cells);
        }
    }
}