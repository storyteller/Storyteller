using System;
using System.Collections.Generic;
using System.Linq;
using FubuCore;
using Storyteller.Core.Conversion;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core.Grammars.Tables
{
    public static class GrammarExtensions
    {
        public static TableGrammar AsTable(this IGrammar inner, string title)
        {
            return new TableGrammar(inner).Titled(title).LeafName("Rows");
        }
    }

    [AttributeUsage(AttributeTargets.Method, AllowMultiple = false, Inherited = true)]
    public class ExposeAsTableAttribute : Attribute
    {
        private readonly string _label;
        private readonly string _leafName;

        public ExposeAsTableAttribute(string label, string leafName)
        {
            _label = label;
            _leafName = leafName;
        }

        public ExposeAsTableAttribute(string label)
            : this(label, "table")
        {
        }

        public IGrammar Create(IGrammar inner)
        {
            return inner.AsTable(_label).LeafName(_leafName);
        }

        public string Label { get { return _label; } }

        public string LeafName { get { return _leafName; } }
    }

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
            if (_before != null) yield return new SilentAction(Stage.before, _before, parentStep);

            foreach (var row in parentStep.Collections[_leafName].Children.OfType<Step>())
            {
                yield return _inner.CreatePlan(row, library);
            }

            if (_after != null) yield return new SilentAction(Stage.after, _after, parentStep);
        }

        public GrammarModel Compile(Conversions conversions)
        {
            var innerModel = _inner.Compile(conversions).As<IModelWithCells>();

            return new Table
            {
                cells = innerModel.cells.ToArray(),
                collection = _leafName
            };
        }
    }


}