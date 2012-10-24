using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Reflection;
using System.Xml;
using HtmlTags;
using NUnit.Framework;
using Rhino.Mocks;
using Rhino.Mocks.Constraints;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Persistence;

namespace StoryTeller.Testing
{
    public static class TestUtility
    {
        public static Test RunTest(string xml)
        {
            Test test = ReadTest(xml);
            return RunTest(test);
        }

        public static Test RunTest(Test test)
        {
            ITestRunner runner = new TestRunner();

            test.LastResult = runner.RunTest(test);

            return test;
        }

        public static HtmlDocument WritePreview(string xml)
        {
            Test test = ReadTest(xml);
            return new TestRunner().WritePreview(test);
        }


        public static Test ReadTest(string xml)
        {
            xml = xml.Replace("'", "\"");

            XmlDocument document = new XmlDocument().WithXmlText(xml);
            var reader = new TestReader();

            return reader.ReadTest(document.DocumentElement);
        }

        public static T[] ArrayOfMocks<T>(int count) where T : class
        {
            var returnValue = new T[count];
            for (int i = 0; i < returnValue.Length; i++)
            {
                returnValue[i] = MockRepository.GenerateMock<T>();
            }

            return returnValue;
        }

        public static void AssertGenericListMatches<T>(IList<T> actual, IList<T> expected)
        {
            var list = new ArrayList(actual.ToArray());

            Assert.AreEqual(expected.Count, list.Count, "The count");

            for (int i = 0; i < expected.Count; i++)
            {
                object expectedValue = expected[i];
                Assert.AreEqual(expectedValue, actual[i], "At position " + i);
            }
        }


        public static void AssertListMatches(IList actualList, IList expectedList)
        {
            var actual = new ArrayList(actualList);
            var expected = new ArrayList(expectedList);

            foreach (object item in actual.ToArray())
            {
                actual.Remove(item);
                expected.Remove(item);
            }

            if (actual.Count == 0 && expected.Count == 0) return;

            string message = "";

            foreach (object o in actual)
            {
                message += string.Format("Extra:  {0}\n", o);
            }

            foreach (object o in expected)
            {
                message += string.Format("Missing:  {0}\n", o);
            }

            Assert.Fail(message);
        }

        #region Nested type: EqualConstraint

        public class EqualConstraint : AbstractConstraint
        {
            private readonly object _expected;
            private List<string> _ignores = new List<string>();

            public EqualConstraint(object expected)
            {
                _expected = expected;
                _ignores.Add("Length");
            }

            public EqualConstraint(object expected, params string[] ignores)
                : this(expected)
            {
                _ignores.AddRange(ignores);
            }


            public override string Message { get { return "Matches?"; } }

            public override bool Eval(object obj)
            {
                AssertEquals(obj);
                return true;
            }

            public void IgnoreProperty(string propertyName)
            {
                _ignores.Add(propertyName);
            }

            public override int GetHashCode()
            {
                return _expected != null ? _expected.GetHashCode() : 0;
            }

            public override bool Equals(object actual)
            {
                if (actual == null)
                {
                    return true;
                }

                Assert.AreEqual(_expected.GetType(), actual.GetType());

                PropertyInfo[] properties = _expected.GetType().GetProperties();
                foreach (PropertyInfo property in properties)
                {
                    if (_ignores.Contains(property.Name))
                    {
                        continue;
                    }

                    if (property.GetIndexParameters().Length > 0)
                    {
                        continue;
                    }

                    if (property.PropertyType.IsAssignableFrom(typeof(ICollection)))
                    {
                        continue;
                    }

                    if (!property.CanRead)
                    {
                        continue;
                    }

                    Debug.WriteLine("Comparing Property " + property.Name);

                    object expectedValue = property.GetValue(_expected, null);
                    object actualValue = property.GetValue(actual, null);


                    if (expectedValue != null)
                    {
                        if (expectedValue.GetType().IsValueType)
                        {
                            Assert.AreEqual(expectedValue, actualValue, property.Name);
                        }
                        else
                        {
                            var childConstraint = new EqualConstraint(expectedValue);
                            childConstraint._ignores = _ignores;

                            childConstraint.Equals(actualValue);
                        }
                    }
                }

                return true;
            }

            public void AssertEquals(object actual)
            {
                Assert.IsTrue(Equals(actual));
            }

            public static void AssertEquals(object expected, object actual)
            {
                var constraint = new EqualConstraint(expected);
                constraint.AssertEquals(actual);
            }

            public static void AssertEquals(object expected, object actual, params string[] ignores)
            {
                var constraint = new EqualConstraint(expected);
                foreach (string property in ignores)
                {
                    constraint.IgnoreProperty(property);
                }
                constraint.AssertEquals(actual);
            }
        }

        #endregion
    }


    public static class SerializationExtensions
    {
    }
}