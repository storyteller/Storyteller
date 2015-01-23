using System;
using Storyteller.Core.Conversion;
using Storyteller.Core.Model;

namespace Storyteller.Core.Grammars
{
    public class SilentGrammar : IGrammar
    {
        private readonly Action<ISpecContext> _action;
        private readonly object _position;

        public SilentGrammar(object position, Action<ISpecContext> action)
        {
            _position = position;
            _action = action;
        }

        public IExecutionStep CreatePlan(Step step, FixtureLibrary library)
        {
            return new SilentAction(_position, _action, step);
        }

        public GrammarModel Compile(CellHandling cells)
        {
            return Silent.Flyweight;
        }

        public object Position
        {
            get { return _position; }
        }
    }
}