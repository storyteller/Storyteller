using System;
using System.Linq.Expressions;
using System.Reflection;
using FubuCore;
using FubuCore.Reflection;
using StoryTeller.Engine;


namespace StoryTeller.DSL
{
    public class ObjectConstructionExpression<T>
    {
        protected readonly ParagraphGrammar _grammar;

        public ObjectConstructionExpression(ParagraphGrammar grammar)
        {
            _grammar = grammar;
        }

        public IGrammar LoadObjectBy { set { _grammar.InsertBefore(value); } }

        public Func<ITestContext, T> ObjectIs
        {
            set
            {
                GrammarAction action = (step, context) => context.CurrentObject = value(context);
                var grammar = new DoGrammar(action);

                _grammar.InsertBefore(grammar);
            }
        }

        // TODO -- test this!
        public Action<T> Do
        {
            set
            {
                var grammar = new DoGrammar((s, c) => value((T) c.CurrentObject));
                _grammar.AddGrammar(grammar);
            }
        }

        public ObjectConstructionExpression<T> SetProperty(Expression<Func<T, object>> expression)
        {
            _grammar.AddGrammar(new SetPropertyGrammar(expression.ToAccessor()));
            return this;
        }

        public ObjectConstructionExpression<T> SetProperty(Expression<Func<T, object>> expression, string defaultValue)
        {
            Accessor accessor = FubuCore.Reflection.ReflectionHelper.GetAccessor(expression);
            var grammar = new SetPropertyGrammar(accessor)
            {
                DefaultValue = defaultValue
            };

            _grammar.AddGrammar(grammar);
            return this;
        }

        public ObjectConstructionExpression<T> SetAllPrimitiveProperties()
        {
            return SetAllPrimitiveProperties(prop => true);
        }

        public ObjectConstructionExpression<T> SetAllPrimitiveProperties(Predicate<PropertyInfo> filter)
        {
            foreach (PropertyInfo property in typeof (T).GetProperties())
            {
                if (!property.CanWrite) continue;
                if (!property.PropertyType.IsSimple()) continue;
                if (!filter(property)) continue;


                var accessor = new SingleProperty(property);
                var child = new SetPropertyGrammar(accessor);
                _grammar.AddGrammar(child);
            }

            return this;
        }

        public ObjectConstructionExpression<T> SetAllPrimitivePropertiesSpecificToThisType()
        {
            SetAllPrimitiveProperties(prop => prop.DeclaringType == typeof (T));
            return this;
        }

        public ObjectConstructionExpression<T> SetProperties(params Expression<Func<T, object>>[] properties)
        {
            foreach (var property in properties)
            {
                SetProperty(property);
            }

            return this;
        }

        public InputExpression<IN> WithInput<IN>(string cellName)
        {
            return new InputExpression<IN>(this, cellName);
        }

        public CreateExpression<IN> CreateWithInput<IN>(string cellName)
        {
            return new CreateExpression<IN>(this, cellName);
        }

        public void CreateNew<U>() where U : new()
        {
            GrammarAction action = (s, c) => c.CurrentObject = new U();
            var grammar = new DoGrammar(action);
            _grammar.InsertBefore(grammar);
        }

        #region Nested type: CreateExpression

        public class CreateExpression<IN>
        {
            private readonly string _name;
            private readonly ObjectConstructionExpression<T> _parent;

            public CreateExpression(ObjectConstructionExpression<T> expression, string name)
            {
                _parent = expression;
                _name = name;
            }

            public CreateObjectGrammar<T, IN> Build(Func<IN, T> creator)
            {
                var grammar = new CreateObjectGrammar<T, IN>(_name, creator);
                _parent._grammar.AddGrammar(grammar);

                return grammar;
            }
        }

        #endregion

        #region Nested type: InputExpression

        public class InputExpression<CELL>
        {
            private readonly string _name;
            private readonly ObjectConstructionExpression<T> _parent;

            public InputExpression(ObjectConstructionExpression<T> expression, string name)
            {
                _parent = expression;
                _name = name;
            }

            public ConfigureObjectGrammar<T, CELL> Configure(Action<T, CELL> configure)
            {
                var grammar = new ConfigureObjectGrammar<T, CELL>(_name, configure);
                _parent._grammar.AddGrammar(grammar);

                return grammar;
            }
        }

        #endregion
    }
}