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
    public class ModelFixture<T> : Fixture where T : class
    {
        private T _model;

        public ModelFixture()
        {
            Title = typeof(T).Name;
        }

        protected T Model
        {
            get { return _model; }
            set
            {
                if (Context != null) Context.State.CurrentObject = value;
                _model = value;
            }


        }

        protected IDictionary<MemberInfo, SetMemberGrammar> _setters
            = new Dictionary<MemberInfo, SetMemberGrammar>();

        protected ICellExpression For(Expression<Func<T, object>> expression)
        {
            var finder = new FindMembers();
            finder.Visit(expression);

            var members = finder.Members.ToArray();
            if (_setters.ContainsKey(members.Last()))
            {
                return _setters[members.Last()].CellModifications;
            }

            var grammar = new SetMemberGrammar(members);
            _setters.Add(members.Last(), grammar);

            return grammar.CellModifications;
        }

        public override FixtureModel Compile(CellHandling cellHandling)
        {
            findGrammars(cellHandling, new MemberInfo[0]);

            foreach (var grammar in _setters.Values)
            {
                this[grammar.Key] = grammar;
            }

            return base.Compile(cellHandling);
        }

        private void findGrammars(CellHandling cellHandling, MemberInfo[] path)
        {
            var type = path.Any() ? path.Last().GetMemberType() : typeof(T);

            foreach (var property in type.GetProperties())
            {
                if (_setters.ContainsKey(property))
                {
                    continue;
                }

                if (cellHandling.Conversions.Has(property.PropertyType))
                {
                    _setters.Add(property, new SetMemberGrammar(path.Append(property)));
                }
                else if (!property.PropertyType.IsGenericEnumerable() && !property.PropertyType.IsArray)
                {
                    findGrammars(cellHandling, path.Append(property));
                }
            }

            foreach (var field in type.GetFields())
            {
                if (_setters.ContainsKey(field))
                {
                    continue;
                }

                if (cellHandling.Conversions.Has(field.FieldType))
                {
                    _setters.Add(field, new SetMemberGrammar(path.Append(field)));
                }
                else if (!field.FieldType.IsGenericEnumerable() && !field.FieldType.IsArray)
                {
                    findGrammars(cellHandling, path.Append(field));
                }
            }
        }

        public sealed override void SetUp()
        {
            if (typeof(T).IsConcreteWithDefaultCtor())
            {
                Model = (T) Activator.CreateInstance(typeof(T));
            }

            beforeEach();
        }

        /// <summary>
        /// Gets executed as part of the parent SetUp() method before each section
        /// of this Fixture
        /// </summary>
        protected virtual void beforeEach()
        {
            
        }

        public override void TearDown()
        {
            Context.State.Store(Model);
            afterEach();
        }

        protected virtual void afterEach()
        {
            
        }
    }
}
