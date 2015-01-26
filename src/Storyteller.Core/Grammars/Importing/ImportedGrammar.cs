using System;
using Storyteller.Core.Model;

namespace Storyteller.Core.Grammars.Importing
{
    public class ImportedGrammar : IGrammar
    {
        private readonly GrammarImport _import;

        public ImportedGrammar(GrammarImport import)
        {
            _import = import;
        }

        public IExecutionStep CreatePlan(Step step, FixtureLibrary library)
        {
            throw new NotImplementedException();
        }

        public GrammarModel Compile(CellHandling cells)
        {
            throw new NotImplementedException();
        }

        public ImportedGrammar Curry(CurryAction curryAction)
        {
            _import.CurryAction = curryAction;
            return this;
        }
    }
}