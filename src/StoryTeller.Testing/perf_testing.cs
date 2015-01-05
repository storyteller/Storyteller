using System;
using System.Diagnostics;
using System.Text.RegularExpressions;
using NUnit.Framework;
using StoryTeller.Samples;
using TestContext = StoryTeller.Engine.TestContext;

namespace StoryTeller.Testing
{
    [TestFixture]
    public class perf_testing
    {
        private string[] numbers;

        public perf_testing()
        {
            numbers = new string[100];
            var random = new Random(5);
            
            for (int i = 0; i < numbers.Length; i++)
            {
                numbers[i] = (random.NextDouble()*1000).ToString();
            }
        }

        [Test]
        public void how_bad_is_fixture_creation()
        {
            var stopwatch = new Stopwatch();
            stopwatch.Start();

            for (int i = 0; i < 1000; i++)
            {
                var fixture = new MathFixture();
            }

            stopwatch.Stop();

            Debug.WriteLine("Took " + stopwatch.ElapsedMilliseconds);
        }

        [Test]
        public void with_object_converter()
        {
            var stopwatch = new Stopwatch();

            var context = new TestContext();

            stopwatch.Start();

            for (int i = 0; i < numbers.Length; i++)
            {
                var num = context.Finder.FromString<double>(numbers[i]);
            }

            stopwatch.Stop();

            Debug.WriteLine("ObjectConverter took " + stopwatch.ElapsedMilliseconds);
        }

        [Test]
        public void with_raw()
        {
            var stopwatch = new Stopwatch();

            var context = new TestContext();

            stopwatch.Start();

            for (int i = 0; i < numbers.Length; i++)
            {
                var num = double.Parse(numbers[i]);
            }

            stopwatch.Stop();

            Debug.WriteLine("Raw took " + stopwatch.ElapsedMilliseconds);
        }
    }
}