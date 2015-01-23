using System;
using System.Collections.Generic;

namespace Storyteller.Core.Grammars.Sets
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