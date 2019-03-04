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
                if (expected == null && actual == null)
                {
                    return true;
                }
                return expected.Equals(actual);
            };
        }
    }
}
