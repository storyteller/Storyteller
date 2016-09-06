using System;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using Baseline;
using Baseline.Reflection;
using StoryTeller.Model;

namespace StoryTeller.Grammars.Paragraphs
{
    public class ObjectVerificationExpression<T> where T : class
    {
        private readonly ParagraphGrammar _grammar;

        public ObjectVerificationExpression(ParagraphGrammar grammar)
        {
            _grammar = grammar;
        }

        public Func<T> Object
        {
            set { _grammar.Do(c => c.State.CurrentObject = value()); }
        }

        public ICellExpression Check(Expression<Func<T, object>> expression)
        {
            var grammar = CheckPropertyGrammar.For(expression);
            _grammar.AddGrammar(grammar);

            return grammar.CellModifications;
        }

        public ObjectVerificationExpression<T> CheckAllSimpleProperties()
        {
            typeof (T).GetTypeInfo()
                .GetProperties()
                .Where(x => x.PropertyType.IsSimple())
                .Each(prop =>
                {
                    var accessor = new SingleProperty(prop);
                    var child = new CheckPropertyGrammar(accessor);
                    _grammar.AddGrammar(child);
                });


            return this;
        }
    }
}