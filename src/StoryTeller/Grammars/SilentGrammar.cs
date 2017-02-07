using System;
using StoryTeller.Model;

namespace StoryTeller.Grammars
{
    public class SilentGrammar : IGrammar
    {
        private readonly Action<ISpecContext> _action;

        public SilentGrammar(object position, Action<ISpecContext> action)
        {
            Position = position;
            _action = action;
        }

        public IExecutionStep CreatePlan(Step step, FixtureLibrary library, bool inTable = false)
        {
            return new SilentAction("Grammar", Position, _action, step)
            {
                Subject = Key
            };
        }

        public GrammarModel Compile(Fixture fixture, CellHandling cells)
        {
            return Silent.Flyweight;
        }

        public object Position { get; }

        public string Key { get; set; }
        public bool IsHidden { get; set; }

        public long MaximumRuntimeInMilliseconds { get; set; }
    }
}