using System;
using System.Linq.Expressions;
using System.Reflection;
using FubuCore;
using FubuCore.Reflection;

namespace Storyteller.Core.Grammars.ObjectBuilding
{
    public class ObjectConstructionExpression<T>
    {
        protected readonly ParagraphGrammar _grammar;

        public ObjectConstructionExpression(ParagraphGrammar grammar)
        {
            _grammar = grammar;
        }

        public IGrammar LoadObjectBy
        {
            set { _grammar.AddGrammar(value); }
        }

        public Func<ISpecContext, T> ObjectIs
        {
            set { _grammar.Do(c => c.State.CurrentObject = value(c)); }
        }

        public Action<T> Do
        {
            set { _grammar.Do(c => value((T) c.State.CurrentObject)); }
        }

        public ObjectConstructionExpression<T> SetProperty(Expression<Func<T, object>> expression)
        {
            _grammar.AddGrammar(new SetPropertyGrammar(expression.ToAccessor()));
            return this;
        }

        public ObjectConstructionExpression<T> SetProperty(Expression<Func<T, object>> expression, string defaultValue)
        {
            Accessor accessor = ReflectionHelper.GetAccessor(expression);
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

        public InputExpression<TCell> WithInput<TCell>(string cellName)
        {
            return new InputExpression<TCell>(this, cellName);
        }

        public CreateExpression<TCell> CreateWithInput<TCell>(string cellName)
        {
            return new CreateExpression<TCell>(this, cellName);
        }

        public void CreateNew<U>() where U : new()
        {
            _grammar.Do(c => c.State.CurrentObject = new U());
        }

        #region Nested type: CreateExpression

        public class CreateExpression<TCell>
        {
            private readonly string _name;
            private readonly ObjectConstructionExpression<T> _parent;

            public CreateExpression(ObjectConstructionExpression<T> expression, string name)
            {
                _parent = expression;
                _name = name;
            }

            /* TODO -- bring this
            public CreateObjectGrammar<T, TCell> Build(Func<TCell, T> creator)
            {
                var grammar = new CreateObjectGrammar<T, TCell>(_name, creator);
                _parent._grammar.AddGrammar(grammar);

                return grammar;
            }
             */
        }

        #endregion

        #region Nested type: InputExpression

        public class InputExpression<TCell>
        {
            private readonly string _name;
            private readonly ObjectConstructionExpression<T> _parent;

            public InputExpression(ObjectConstructionExpression<T> expression, string name)
            {
                _parent = expression;
                _name = name;
            }

            /* TODO -- bring this back
            public ConfigureObjectGrammar<T, TCell> Configure(Action<T, TCell> configure)
            {
                var grammar = new ConfigureObjectGrammar<T, TCell>(_name, configure);
                _parent._grammar.AddGrammar(grammar);

                return grammar;
            }
             */
        }

        #endregion
    }
}