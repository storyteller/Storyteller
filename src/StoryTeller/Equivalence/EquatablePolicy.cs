using System;
using Baseline;

namespace StoryTeller.Equivalence
{
    public class EquatablePolicy : IEquivalenceCheckerPolicy
    {
        public bool Matches(Type type)
        {
            Type equatable = typeof(IEquatable<>).MakeGenericType(type);
            return type.CanBeCastTo(equatable);
        }

        public Func<object, object, bool> CreateComparison(Type type, EquivalenceChecker checker)
        {
            var equalizerType = typeof(Equalizer<>).MakeGenericType(type);
            var equalizer = (IEqualizer)Activator.CreateInstance(equalizerType);
            return equalizer.Matches;
        }
    }
}