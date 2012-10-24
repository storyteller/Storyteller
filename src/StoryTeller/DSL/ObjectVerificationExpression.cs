using System;
using System.Linq.Expressions;
using System.Reflection;
using FubuCore;
using FubuCore.Reflection;
using StoryTeller.Engine;
using StoryTeller.Engine.Reflection;


namespace StoryTeller.DSL
{
    public class ObjectVerificationExpression<T> where T : class
    {
        private readonly ParagraphGrammar _grammar;

        public ObjectVerificationExpression(ParagraphGrammar grammar)
        {
            _grammar = grammar;
        }

        // TODO -- want an overload that sets this directly
        public Func<T> Object
        {
            set
            {
                GrammarAction action = (step, context) => context.CurrentObject = value();
                _grammar.AddGrammar(new DoGrammar(action));
            }
        }

        public ObjectVerificationExpression<T> Check(Expression<Func<T, object>> expression)
        {
            CheckPropertyGrammar child = CheckPropertyGrammar.For(expression);
            _grammar.AddGrammar(child);

            return this;
        }

        public ObjectVerificationExpression<T> CheckAllSimpleProperties()
        {
            foreach (PropertyInfo property in typeof (T).GetProperties())
            {
                if (!property.PropertyType.IsSimple()) continue;

                var accessor = new SingleProperty(property);
                var child = new CheckPropertyGrammar(accessor);
                _grammar.AddGrammar(child);
            }

            return this;
        }
    }
}