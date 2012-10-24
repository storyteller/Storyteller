using System;
using StoryTeller.Domain;
using StoryTeller.Model;

namespace StoryTeller.Engine.Importing
{
    public class ImportedGrammar : IGrammar
    {
        private readonly GrammarImport _import;
        private readonly Func<ITestContext> _fixtureSource;

        public ImportedGrammar(GrammarImport import, Func<ITestContext> fixtureSource)
        {
            _import = import;
            _fixtureSource = fixtureSource;
        }

        private string _description;

        public string Description
        {
            get { return _description ?? _import.ToString(); }
            set { _description = value; }
        }

        private IGrammar _inner;
        private IGrammar inner(ITestContext context)
        {
            if (_inner == null)
            {
                _inner = _import.FindGrammar(context);
            }

            return _inner;
        }

        public void Execute(IStep containerStep, ITestContext context)
        {
            inner(context).Execute(containerStep, context);
        }

        public GrammarStructure ToStructure(FixtureLibrary library)
        {
            return _import.FindStructure(library);
        }

        public ImportedGrammar Curry(CurryAction curryAction)
        {
            _import.CurryAction = curryAction;
            return this;
        }
    }
}