using System;
using Baseline;

namespace StoryTeller.Equivalence
{
    public class Equalizer<T> : IEqualizer where T : IEquatable<T>
    {
        public bool Matches(object one, object two)
        {
            if (one == null) return two == null;
            if (two == null) return false;

            return one.As<IEquatable<T>>().Equals((T)two);
        }
    }
}