using System;

namespace StoryTeller.Equivalence
{
    public class StandardEqualsPolicy : IEquivalenceCheckerPolicy
    {
        public bool Matches(Type type)
        {
            return true;
        }

        public Func<object, object, bool> CreateComparison(Type type, EquivalenceChecker checker)
        {
            return (expected, actual) =>
            {
                if (actual != null) return expected != null && expected.Equals(actual);
                return expected == null || expected.Equals(null);
            };
        }
    }
}
