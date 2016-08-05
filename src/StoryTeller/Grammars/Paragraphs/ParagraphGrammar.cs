using System;
using System.Collections.Generic;
using System.Linq;
using Baseline;
using StoryTeller.Grammars.ObjectBuilding;
using StoryTeller.Model;

namespace StoryTeller.Grammars.Paragraphs
{
    public class ParagraphGrammar : IGrammar
    {
        private readonly IList<IGrammar> _children = new List<IGrammar>();
        private readonly string _title;
        private string _key;

        public ParagraphGrammar(string title)
        {
            _title = title;
        }

        public IExecutionStep CreatePlan(Step step, FixtureLibrary library)
        {
            var children = _children.Select(x => x.CreatePlan(step, library)).ToArray();
            for (int i = 0; i < children.Length; i++)
            {
                if (children[i] is ILineExecution)
                {
                    children[i].As<ILineExecution>().Position = i;
                }
            }

            return new CompositeExecution(children);
        }

        public IList<IGrammar> Children
        {
            get { return _children; }
        }

        /// <summary>
        /// Adds a new child grammar to this ParagraphGrammar
        /// </summary>
        /// <param name="grammar"></param>
        public void AddGrammar(IGrammar grammar)
        {
            _children.Add(grammar);
        }

        public GrammarModel Compile(Fixture fixture, CellHandling cells)
        {
            var childrenModels = _children.Select(_ => _.Compile(fixture, cells)).ToArray();
            return new Paragraph (childrenModels){ title = _title};
        }

        public void Do(Action<ISpecContext> action)
        {
            var silent = new SilentGrammar(_children.Count, action);
            _children.Add(silent);
        }


        public string Key
        {
            get { return _key; }
            set
            {
                _key = value;
                for (var i = 0; i < Children.Count; i++)
                {
                    Children[i].Key = value + ":" + i;
                }
            }
        }

        public bool IsHidden { get; set; }
    }


    public class ParagraphBuilder
    {
        private readonly ParagraphGrammar _grammar;

        public ParagraphBuilder(ParagraphGrammar grammar)
        {
            _grammar = grammar;
        }

        public static ParagraphBuilder operator +(ParagraphBuilder expression, IGrammar grammar)
        {
            expression._grammar.AddGrammar(grammar);
            return expression;
        }

        public static ParagraphBuilder operator +(ParagraphBuilder expression, Action action)
        {
            expression._grammar.Do(c => action());

            return expression;
        }

        public static ParagraphBuilder operator +(ParagraphBuilder expression, Action<ISpecContext> action
            )
        {
            expression._grammar.Do(action);

            return expression;
        }

        public void VerifyPropertiesOf<T>(Action<ObjectVerificationExpression<T>> action)
            where T : class
        {
            var expression = new ObjectVerificationExpression<T>(_grammar);
            action(expression);
        }

        public void SetPropertiesOnCurrentObject<T>(Action<ObjectConstructionExpression<T>> action)
        {
            var expression = new ObjectConstructionExpression<T>(_grammar);
            action(expression);
        }
    }


}