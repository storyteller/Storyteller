using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using Baseline;
using Baseline.Expressions;
using StoryTeller.Model;

namespace StoryTeller.Grammars.API
{
    /// <summary>
    /// Base class helper for verifying properties, fields, or other state
    /// of an object of type T
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class CheckModelFixture<T> : Fixture
    {
        protected IDictionary<MemberInfo, CheckPropertyGrammar> _checks
            = new Dictionary<MemberInfo, CheckPropertyGrammar>();
        private T _model;

        /// <summary>
        /// The current object of T being validated
        /// </summary>
        protected T Model
        {
            get { return _model; }
            set
            {
                if (Context != null) Context.State.CurrentObject = value;
                _model = value;
            }
        }

        private void findGrammars(CellHandling cellHandling, MemberInfo[] path)
        {
            var type = path.Any() ? path.Last().GetMemberType() : typeof(T);

            foreach (var property in type.GetProperties())
            {
                if (_checks.ContainsKey(property))
                {
                    continue;
                }

                if (cellHandling.Conversions.Has(property.PropertyType))
                {
                    _checks.Add(property, new CheckPropertyGrammar(path.Append(property)));
                }
                else if (!property.PropertyType.IsGenericEnumerable() && !property.PropertyType.IsArray)
                {
                    findGrammars(cellHandling, path.Append(property));
                }
            }

            foreach (var field in type.GetFields())
            {
                if (_checks.ContainsKey(field))
                {
                    continue;
                }

                if (cellHandling.Conversions.Has(field.FieldType))
                {
                    _checks.Add(field, new CheckPropertyGrammar(path.Append(field)));
                }
                else if (!field.FieldType.IsGenericEnumerable() && !field.FieldType.IsArray)
                {
                    findGrammars(cellHandling, path.Append(field));
                }
            }
        }

        /// <summary>
        /// Syntactical sugar over For(expression)
        /// </summary>
        /// <param name="expression"></param>
        /// <returns></returns>
        protected ICellExpression Check(Expression<Func<T, object>> expression)
        {
            return For(expression);
        }

        /// <summary>
        /// Use to customize or register the Storyteller appearance and editing 
        /// for a given property or field
        /// </summary>
        /// <param name="expression"></param>
        /// <returns></returns>
        protected ICellExpression For(Expression<Func<T, object>> expression)
        {
            var finder = new FindMembers();
            finder.Visit(expression);

            var members = finder.Members.ToArray();
            if (_checks.ContainsKey(members.Last()))
            {
                return _checks[members.Last()].CellModifications;
            }

            var grammar = new CheckPropertyGrammar(members);
            _checks.Add(members.Last(), grammar);

            return grammar.CellModifications;
        }

        public override FixtureModel Compile(CellHandling cellHandling)
        {
            findGrammars(cellHandling, new MemberInfo[0]);

            foreach (var grammar in _checks.Values)
            {
                this[grammar.Key] = grammar;
            }

            return base.Compile(cellHandling);
        }
    }
}
