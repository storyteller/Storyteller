using System;
using FubuCore;

namespace Storyteller.Core.Equivalence
{
    public class Equalizer<T> : IEqualizer where T : IEquatable<T>
    {
        public bool Matches(object one, object two)
        {
            return one.As<IEquatable<T>>().Equals((T)two);
        }
    }
}