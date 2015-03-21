using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Runtime.Serialization.Formatters.Binary;
using System.Xml;
using FubuCore.Reflection;
using NUnit.Framework;
using NUnit.Framework.Constraints;
using Rhino.Mocks;
using Rhino.Mocks.Constraints;
using Rhino.Mocks.Interfaces;
using Shouldly;
using Is = NUnit.Framework.Is;

namespace StoryTeller.Testing
{
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

            if (exception == null) Assert.Fail("An exception was expected, but not thrown by the given action.");

            return exception;
        }
    }


    public delegate void MethodThatThrows();

    public static class SpecificationExtensions
    {

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
            Assert.AreSame(expected, actual);
            return expected;
        }

        public static object ShouldNotBeTheSameAs(this object actual, object expected)
        {
            Assert.AreNotSame(expected, actual);
            return expected;
        }

        public static void ShouldHaveTheSameElementsAs(this IList actual, IList expected)
        {
            try
            {
                actual.ShouldNotBeNull();
                expected.ShouldNotBeNull();

                actual.Count.ShouldBe(expected.Count);

                for (int i = 0; i < actual.Count; i++)
                {
                    actual[i].ShouldBe(expected[i]);
                }
            }
            catch (Exception)
            {
                Debug.WriteLine("Actual values were:");
                actual.Each(x => Debug.WriteLine(x));
                throw;
            }
        }

        public static void ShouldHaveTheSameElementsAs<T>(this IEnumerable<T> actual, params T[] expected)
        {
            ShouldHaveTheSameElementsAs(actual, (IEnumerable<T>)expected);
        }

        public static void ShouldHaveTheSameElementsAs<T>(this IEnumerable<T> actual, IEnumerable<T> expected)
        {
            IList actualList = (actual is IList) ? (IList)actual : actual.ToList();
            IList expectedList = (expected is IList) ? (IList)expected : expected.ToList();

            ShouldHaveTheSameElementsAs(actualList, expectedList);
        }


    }
}