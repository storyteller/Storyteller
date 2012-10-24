using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using StoryTeller.Engine;
using StoryTeller.Engine.Sets;

namespace StoryTeller.DSL
{
    public class VerifySetExpression<T>
    {
        private readonly Func<ITestContext, IEnumerable<T>> _dataSource;
        private string _description = string.Empty;
        private bool _ordered;
        private string _leafName = "rows";
        private string _title = "Verify Set of " + typeof(T).Name;

        public VerifySetExpression(Func<ITestContext, IEnumerable<T>> dataSource)
        {
            _dataSource = dataSource;
        }

        public VerifySetExpression<T> Description(string description)
        {
            _description = description;
            return this;
        }

        public VerifySetExpression<T> Titled(string title)
        {
            _title = title;
            return this;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="stepName"></param>
        /// <returns></returns>
        public VerifySetExpression<T> LeafNameIs(string stepName)
        {
            _leafName = stepName;
            return this;
        }

        public SetVerificationGrammar MatchOn(params Expression<Func<T, object>>[] properties)
        {
            var comparer = new ObjectComparer<T>();
            foreach (var property in properties)
            {
                comparer.MatchOn(property);
            }

            var grammar = new SetVerificationGrammar(_leafName, _title, comparer)
            {
                Description = _description,
                Ordered = _ordered
            };
            grammar.Before((step, context) => { context.CurrentObject = _dataSource(context); });

            return grammar;
        }

        // TODO -- overload that takes in the comparison

        public VerifySetExpression<T> Ordered()
        {
            _ordered = true;
            return this;
        }
    }
}