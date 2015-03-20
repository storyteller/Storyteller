using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using FubuCore;
using FubuCore.Reflection;

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

        public ObjectVerificationExpression<T> Check(Expression<Func<T, object>> expression)
        {
            _grammar.AddGrammar(CheckPropertyGrammar.For(expression));

            return this;
        }

        public ObjectVerificationExpression<T> CheckAllSimpleProperties()
        {
            typeof (T)
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