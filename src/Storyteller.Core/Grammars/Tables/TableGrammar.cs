using System;
using System.Collections.Generic;
using System.Linq;
using FubuCore;
using Storyteller.Core.Conversion;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core.Grammars.Tables
{
    public class TableGrammar : IGrammar
    {
        private readonly IGrammar _inner;
        private Action<ISpecContext> _before;
        private Action<ISpecContext> _after;
        private string _leafName = "rows";

        public TableGrammar(IGrammar inner)
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
            return new CompositeExecution(toExecutionSteps(library, step));
        }

        private IEnumerable<IExecutionStep> toExecutionSteps(FixtureLibrary library, Step parentStep)
        {
            var section = parentStep.Collections[_leafName];

            if (_before != null) yield return new SilentAction(Stage.before, _before, section);

            
            foreach (var row in section.Children.OfType<Step>())
            {
                yield return _inner.CreatePlan(row, library);
            }

            if (_after != null) yield return new SilentAction(Stage.after, _after, section);
        }

        public GrammarModel Compile(CellHandling cells)
        {
            if (_inner is MissingGrammar)
            {
                return _inner.Compile(cells);
            }

            var innerModel = _inner.Compile(cells).As<IModelWithCells>();

            return new Table
            {
                cells = innerModel.cells.ToArray(),
                collection = _leafName
            };
        }
    }


}