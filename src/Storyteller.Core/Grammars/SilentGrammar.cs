using System;
using Storyteller.Core.Conversion;
using Storyteller.Core.Engine;
using Storyteller.Core.Model;

namespace Storyteller.Core.Grammars
{
    public class SilentGrammar : IGrammar
    {
        private readonly Action<ISpecContext> _action;

        public SilentGrammar(Action<ISpecContext> action)
        {
            _action = action;
        }

        public IExecutionStep CreatePlan(Step step, FixtureLibrary library)
        {
            throw new NotImplementedException();
        }

        public GrammarModel Compile(Conversions conversions)
        {
            throw new NotImplementedException();
        }
    }
}