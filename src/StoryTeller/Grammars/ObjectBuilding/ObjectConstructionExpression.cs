using System;
using System.Linq.Expressions;
using System.Reflection;
using Baseline;
using Baseline.Reflection;
using StoryTeller.Grammars.Paragraphs;
using StoryTeller.Model;

namespace StoryTeller.Grammars.ObjectBuilding
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
        public void Do(Action<T> value)
        {
            _grammar.Do(c => value((T) c.State.CurrentObject));
        }

        /// <summary>
        /// Creates a line to set a single property
        /// </summary>
        /// <param format="expression"></param>
        /// <returns></returns>
        public ICellExpression SetProperty(Expression<Func<T, object>> expression, string defaultValue = null)
        {
            var grammar = SetPropertyGrammar.For(expression);

            _grammar.AddGrammar(grammar);

            if (defaultValue.IsNotEmpty())
            {
                grammar.CellModifications.DefaultValue(defaultValue);
            }

            return grammar.CellModifications;
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
        /// <param format="filter"></param>
        /// <returns></returns>
        public ObjectConstructionExpression<T> SetAllPrimitiveProperties(Func<PropertyInfo, bool> filter)
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
        /// <param format="filter"></param>
        /// <returns></returns>
        public ObjectConstructionExpression<T> SetAllPrimitivePropertiesSpecificToThisType()
        {
            SetAllPrimitiveProperties(prop => prop.DeclaringType == typeof (T));
            return this;
        }

        /// <summary>
        /// Create setters for multiple properties
        /// </summary>
        /// <param format="properties"></param>
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
        /// <typeparam format="TCell"></typeparam>
        /// <param format="format"></param>
        /// <returns></returns>
        public InputExpression<TCell> WithInput<TCell>(string format, string defaultValue = null)
        {
            return new InputExpression<TCell>(this, format, defaultValue);
        }



        public class InputExpression<TCell>
        {
            private readonly string _format;
            private readonly string _defaultValue;
            private readonly ObjectConstructionExpression<T> _parent;

            public InputExpression(ObjectConstructionExpression<T> expression, string format, string defaultValue)
            {
                _parent = expression;
                _format = format;
                _defaultValue = defaultValue;
            }

            /// <summary>
            /// Either modify or do some kind of action against the T subject and
            /// the input data
            /// </summary>
            /// <param name="configure"></param>
            /// <returns></returns>
            public ICellExpression Configure(Action<T, TCell> configure)
            {
                var grammar = new ConfigureObjectGrammar<T, TCell>(_format, configure);
                _parent._grammar.AddGrammar(grammar);

                if (_defaultValue.IsNotEmpty())
                {
                    grammar.CellModifications.DefaultValue(_defaultValue);
                }

                return grammar.CellModifications;
            }
        }

    }
}