using System;
using System.Linq;
using Storyteller.Core.Conversion;
using Storyteller.Core.Engine;
using Storyteller.Core.Model;

namespace Storyteller.Core.Grammars.Tables
{
    public class TableGrammar : IGrammar
    {
        private readonly IGrammarWithCells _inner;
        private Action<ISpecContext> _before;
        private Action<ISpecContext> _after;
        private string _leafName = "rows";

        public TableGrammar(IGrammarWithCells inner)
        {
            _inner = inner;
        }

        public TableGrammar Before(Action<ISpecContext> before)
        {
            _before = before;
            return this;
        }

        public TableGrammar After(Action<ISpecContext> after)
        {
            _after = after;
            return this;
        }

        public string LeafName()
        {
            return _leafName;
        }

        public TableGrammar LeafName(string leafName)
        {
            _leafName = leafName;
            return this;
        }

        public string Title { get; private set; }

        public TableGrammar Titled(string title)
        {
            Title = title;
            return this;
        }

        public IExecutionStep CreatePlan(Step step, FixtureLibrary library)
        {
            // TODO -- refactor Section plan!
            throw new NotImplementedException();
        }

        public GrammarModel Compile(Conversions conversions)
        {
            return new Table
            {
                cells = _inner.BuildCells(conversions).ToArray(),
                collection = _leafName
            };
        }
    }


}