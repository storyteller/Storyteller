using System;

namespace StoryTeller.Equivalence
{
    public interface IEquivalenceCheckerPolicy
    {
        bool Matches(Type type);
        Func<object, object, bool> CreateComparison(Type type, EquivalenceChecker checker);
    }
}