using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using Baseline;

namespace StoryTeller.Grammars.Sets
{
    public class VerifySetExpression<T>
    {
        private readonly Func<ISpecContext, IEnumerable<T>> _dataSource;
        private string _description = string.Empty;
        private bool _ordered;
        private string _leafName = "rows";
        private string _title = "Verify Set of " + typeof(T).Name;

        public VerifySetExpression(Func<ISpecContext, IEnumerable<T>> dataSource)
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

        /// <summary>
        /// Use this method if you want to explicitly customize the comparison cells
        /// with editors, defaults, headers, or selection lists
        /// </summary>
        /// <param name="configure"></param>
        /// <returns></returns>
        public SetVerificationGrammar Comparisons(Action<ObjectComparison<T>> configure)
        {
            var comparer = new ObjectComparison<T>(_dataSource);
            configure(comparer);

            var grammar = new SetVerificationGrammar(_title, _leafName, comparer);
            if (_ordered)
            {
                grammar.Ordered();
            }

            return grammar;
        }

        /// <summary>
        /// Quickly define comparisons based on properties
        /// </summary>
        /// <param name="properties"></param>
        /// <returns></returns>
        public SetVerificationGrammar MatchOn(params Expression<Func<T, object>>[] properties)
        {
            return Comparisons(_ => properties.Each(x => _.Compare(x)));
        }


        public VerifySetExpression<T> Ordered()
        {
            _ordered = true;
            return this;
        }
    }
}