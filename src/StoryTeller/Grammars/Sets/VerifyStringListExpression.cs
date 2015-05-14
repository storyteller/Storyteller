using System;
using System.Collections.Generic;

namespace StoryTeller.Grammars.Sets
{
    public class VerifyStringListExpression
    {
        private readonly Func<ISpecContext, IEnumerable<string>> _dataSource;

        public VerifyStringListExpression(Func<ISpecContext, IEnumerable<string>> dataSource)
        {
            _dataSource = dataSource;
        }


        /// <summary>
        /// Specify the appearance of the html for this set verification grammar
        /// </summary>
        /// <param name="title">The text that appears in the title bar in the rendered html for this grammar</param>
        /// <param name="header">The text that will appear in the header column in the rendered html</param>
        /// <returns></returns>
        public SetVerificationGrammar Titled(string title, string header = "expected")
        {
            var comparison = new StringListComparison(header, _dataSource);

            return new SetVerificationGrammar(title, "Rows", comparison);
        }


    }
}