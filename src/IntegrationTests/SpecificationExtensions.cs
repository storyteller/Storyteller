using System;
using System.Collections.Generic;
using Shouldly;

namespace IntegrationTests
{
    [Obsolete("Replace with the Shouldly equivalent")]
    public static class Exception<T> where T : Exception
    {
        public static T ShouldBeThrownBy(Action action)
        {
            T exception = null;

            try
            {
                action();
            }
            catch (Exception e)
            {
                exception = e.ShouldBeOfType<T>();
            }

            if (exception == null) throw new Exception("An exception was expected, but not thrown by the given action.");

            return exception;
        }
    }


    public delegate void MethodThatThrows();

    public static class SpecificationExtensions
    {
        public static void ShouldBeTrue(this bool anObject)
        {
            anObject.ShouldBe(true);
        }

        public static void ShouldBeFalse(this bool anObject)
        {
            anObject.ShouldBe(false);
        }

        public static void ShouldBeNull(this object anObject)
        {
            anObject.ShouldBe(null);
        }

        public static T ShouldNotBeNull<T>(this T anObject) where T : class
        {
            anObject.ShouldNotBe(null);
            return anObject;
        }


        public static object ShouldBeTheSameAs(this object actual, object expected)
        {
            ReferenceEquals(actual, expected).ShouldBe(true);
            return expected;
        }

        public static object ShouldNotBeTheSameAs(this object actual, object expected)
        {
            ReferenceEquals(actual, expected).ShouldBe(false);
            return expected;
        }

        public static void ShouldHaveTheSameElementsAs<T>(this IEnumerable<T> actual, params T[] expected)
        {
            actual.ShouldBe(expected);
        }
    }
}