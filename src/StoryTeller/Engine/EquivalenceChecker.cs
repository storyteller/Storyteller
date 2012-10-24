using System;
using System.Collections;
using System.Collections.Generic;
using FubuCore.Util;
using FubuCore;
using System.Linq;

namespace StoryTeller.Engine
{
    public interface IEquivalenceCheckerPolicy
    {
        bool Matches(Type type);
        Func<object, object, bool> CreateComparison(Type type, EquivalenceChecker checker);
    }

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

    public class StandardEqualsPolicy : IEquivalenceCheckerPolicy
    {
        public bool Matches(Type type)
        {
            return true;
        }

        public Func<object, object, bool> CreateComparison(Type type, EquivalenceChecker checker)
        {
            return (expected, actual) => expected.Equals(actual);
        }
    }

    public class EquivalenceChecker
    {
        private readonly Cache<Type, Func<object, object, bool>> _comparisons 
            = new Cache<Type, Func<object, object, bool>>();

        private readonly IList<IEquivalenceCheckerPolicy> _policies = new List<IEquivalenceCheckerPolicy>()
        {
            new ArrayEquivalencyPolicy(),
            new EquatablePolicy(),
            new StandardEqualsPolicy()
        };

        public EquivalenceChecker()
        {
            _comparisons.OnMissing = createComparison;
        }

        public bool IsEqual(object expected, object actual)
        {
            if (expected == null)
            {
                return actual == null;
            }
            
            if (actual == null)
            {
                return false;
            }

            return _comparisons[expected.GetType()](expected, actual);
        }
    
        public Func<object, object, bool> CheckerFor(Type type)
        {
            return _comparisons[type];
        }
        
        private Func<object, object, bool> createComparison(Type type)
        {
            return _policies.First(x => x.Matches(type)).CreateComparison(type, this);
        }    
    }

    public class ArrayEquivalencyPolicy : IEquivalenceCheckerPolicy
    {
        public bool Matches(Type type)
        {
            return type.IsArray;
        }

        public Func<object, object, bool> CreateComparison(Type type, EquivalenceChecker checker)
        {
            var inner = checker.CheckerFor(type.GetElementType());
            return (expected, actual) => new ArrayComparer(inner).Matches(expected, actual);
        }


        public class ArrayComparer
        {
            private readonly Func<object, object, bool> _inner;

            public ArrayComparer(Func<object, object, bool> inner)
            {
                _inner = inner;
            }

            public bool Matches(object one, object two)
            {
                var expected = new ArrayList(one.As<ICollection>());
                var actual = new ArrayList(two.As<ICollection>());

                foreach (object o in actual.ToArray())
                {
                    if (expected.Contains(o))
                    {
                        actual.Remove(o);
                        expected.Remove(o);
                    }
                }

                foreach (object o in expected.ToArray())
                {
                    if (actual.Contains(o))
                    {
                        actual.Remove(o);
                        expected.Remove(o);
                    }
                }

                return actual.Count == 0 && expected.Count == 0;
            }
        }
    }

    public interface IEqualizer
    {
        bool Matches(object one, object two);
    }

    public class Equalizer<T> : IEqualizer where T : IEquatable<T>
    {
        public bool Matches(object one, object two)
        {
            return one.As<IEquatable<T>>().Equals((T)two);
        }
    }

}