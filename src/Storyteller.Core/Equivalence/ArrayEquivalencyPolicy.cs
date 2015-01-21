using System;
using System.Collections;
using FubuCore;

namespace Storyteller.Core.Equivalence
{
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
}