using System;
using StoryTeller.Model;

namespace StoryTeller.Grammars
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
            return new SilentAction("Grammar", _position, _action, step)
            {
                Subject = Key
            };
        }

        public GrammarModel Compile(Fixture fixture, CellHandling cells)
        {
            return Silent.Flyweight;
        }

        public object Position
        {
            get { return _position; }
        }

        public string Key { get; set; }
    }
}