using System;
using System.Collections.Generic;
using StoryTeller.Domain;

namespace StoryTeller.Engine
{
    public class SimpleGrammar : LineGrammar
    {
        private readonly GrammarAction _action;

        public SimpleGrammar(string text, Action action)
            : this(text, action.ToGrammarAction())
        {
        }

        public SimpleGrammar(string text, GrammarAction action)
            : base(text)
        {
            _action = action;
        }

        public override string Description { get { return Template; } }

        public override void Execute(IStep containerStep, ITestContext context)
        {
            _action(containerStep, context);
        }

        public override IList<Cell> GetCells()
        {
            return new List<Cell>();
        }
    }
}