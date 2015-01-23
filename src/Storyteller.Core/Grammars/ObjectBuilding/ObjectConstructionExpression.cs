using System;
using System.Linq.Expressions;
using System.Reflection;
using FubuCore;
using FubuCore.Reflection;
using Storyteller.Core.Grammars.Paragraphs;

namespace Storyteller.Core.Grammars.ObjectBuilding
{
    public class ObjectConstructionExpression<T>
    {
        private readonly ParagraphGrammar _grammar;

        public ObjectConstructionExpression(ParagraphGrammar grammar)
        {
            _grammar = grammar;
        }

        /// <summary>
        /// Use another grammar to set the new T onto the 
        /// State.CurrentObject
        /// </summary>
        public IGrammar LoadObjectBy
        {
            set { _grammar.AddGrammar(value); }
        }

        /// <summary>
        /// Create the initial object with a user supplied
        /// Func
        /// </summary>
        public Func<ISpecContext, T> ObjectIs
        {
            set { _grammar.Do(c => c.State.CurrentObject = value(c)); }
        }

        /// <summary>
        /// Perform some type of silent action on the current
        /// object being created
        /// </summary>
        public Action<T> Do
        {
            set { _grammar.Do(c => value((T) c.State.CurrentObject)); }
        }

        /// <summary>
        /// Creates a line to set a single property
        /// </summary>
        /// <param name="expression"></param>
        /// <returns></returns>
        public ObjectConstructionExpression<T> SetProperty(Expression<Func<T, object>> expression, string defaultValue = null)
        {
            var grammar = new SetPropertyGrammar(expression.ToAccessor())
            {
                DefaultValue = defaultValue
            };

            _grammar.AddGrammar(grammar);

            return this;
        }
        
        /// <summary>
        /// Equivalent to calling SetProperty on each primitive property of type T
        /// </summary>
        /// <returns></returns>
        public ObjectConstructionExpression<T> SetAllPrimitiveProperties()
        {
            return SetAllPrimitiveProperties(prop => true);
        }

        /// <summary>
        /// Adds a property setter for all primitive properties on T that
        /// meet the filter
        /// </summary>
        /// <param name="filter"></param>
        /// <returns></returns>
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

        /// <summary>
        /// Adds a property setter for all primitive properties declared
        /// by type T
        /// </summary>
        /// <param name="filter"></param>
        /// <returns></returns>
        public ObjectConstructionExpression<T> SetAllPrimitivePropertiesSpecificToThisType()
        {
            SetAllPrimitiveProperties(prop => prop.DeclaringType == typeof (T));
            return this;
        }

        /// <summary>
        /// Create setters for multiple properties
        /// </summary>
        /// <param name="properties"></param>
        /// <returns></returns>
        public ObjectConstructionExpression<T> SetProperties(params Expression<Func<T, object>>[] properties)
        {
            foreach (var property in properties)
            {
                SetProperty(property);
            }

            return this;
        }

        
        /// <summary>
        /// Apply changes to the object being built
        /// </summary>
        /// <typeparam name="TCell"></typeparam>
        /// <param name="cellName"></param>
        /// <returns></returns>
        public InputExpression<TCell> WithInput<TCell>(string cellName)
        {
            return new InputExpression<TCell>(this, cellName);
        }



        public class InputExpression<TCell>
        {
            private readonly string _name;
            private readonly ObjectConstructionExpression<T> _parent;

            public InputExpression(ObjectConstructionExpression<T> expression, string name)
            {
                _parent = expression;
                _name = name;
            }

            // TODO -- do something more usable than this?
            // _.Cell['foo'] = (loc, cell) => ?
            public ConfigureObjectGrammar<T, TCell> Configure(Action<T, TCell> configure)
            {
                var grammar = new ConfigureObjectGrammar<T, TCell>(_name, configure);
                _parent._grammar.AddGrammar(grammar);

                return grammar;
            }
        }

    }
}