using System;
using System.Collections.Generic;
using Storyteller.Core.Sets;

namespace Storyteller.Core.DSL
{
    public class VerifyStringListExpression
    {
        private readonly Func<ISpecContext, IEnumerable<string>> _dataSource;

        public VerifyStringListExpression(Func<ISpecContext, IEnumerable<string>> dataSource)
        {
            _dataSource = dataSource;
        }


        public SetVerificationGrammar Titled(string title)
        {
            var comparison = new StringListComparison("expected", _dataSource);

            return new SetVerificationGrammar(title, "Rows", comparison);
        }


    }
}