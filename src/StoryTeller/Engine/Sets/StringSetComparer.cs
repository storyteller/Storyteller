using System;
using System.Collections.Generic;
using StoryTeller.Domain;

namespace StoryTeller.Engine.Sets
{
    public class StringSetComparer : ISetComparer, ISetColumn
    {
        public const string EXPECTED = "expected";

        public IEnumerable<ISetColumn> Columns
        {
            get { return new ISetColumn[]{this}; } 
        }

        public Cell Cell
        {
            get { return cell(); }
        }

        public void ReadExpected(ITestContext context, IStep step, SetRow row)
        {
            Cell.ReadArgument(context, step, x => row.Values[EXPECTED] = x);
        }

        public void ReadActual(object target, SetRow row)
        {
            row.Values[EXPECTED] = target;
        }

        public void ConfigureMatcher(RowValueMatcher matcher)
        {
        }

        private static Cell cell()
        {
            return Cell.For<string>(EXPECTED);
        }
    }
}