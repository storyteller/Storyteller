using System;
using System.Collections.Generic;
using StoryTeller.Engine;
using StoryTeller.Engine.Sets;

namespace StoryTeller.DSL
{
    public class VerifyStringListExpression
    {
        private readonly Func<ITestContext, IEnumerable<string>> _dataSource;
        private readonly ISetComparer _comparer = new StringSetComparer();
        private string _description = string.Empty;
        private string _leafName = "Rows";
        private string _title = "Verify Set of Strings";
        private bool _ordered;

        public VerifyStringListExpression()
        {
        }

        public VerifyStringListExpression(Func<ITestContext, IEnumerable<string>> dataSource)
        {
            _dataSource = dataSource;
        }

        public VerifyStringListExpression Description(string description)
        {
            _description = description;
            return this;
        }

        public VerifyStringListExpression Titled(string title)
        {
            _title = title;
            return this;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="leafName"></param>
        /// <returns></returns>
        public VerifyStringListExpression LeafNameIs(string leafName)
        {
            _leafName = leafName;
            return this;
        }

        public SetVerificationGrammar Grammar()
        {
            var grammar = new SetVerificationGrammar(_leafName, _title, _comparer)
            {
                Description = _description,
                Ordered = _ordered
            };
            if (_dataSource != null)
            {
                grammar.Before((step, context) => { context.CurrentObject = _dataSource(context); });
            }

            return grammar;
        }

        public VerifyStringListExpression Ordered()
        {
            _ordered = true;
            return this;
        }
    }
}