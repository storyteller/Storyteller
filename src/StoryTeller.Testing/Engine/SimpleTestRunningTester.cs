using System;
using System.Diagnostics;
using HtmlTags;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Samples;
using StoryTeller.Workspace;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class HtmlWriterTester
    {
        [Test]
        public void give_it_a_whirl()
        {
            var test = new Test("The First Test");


            test.Section<ArithmeticFixture>(x =>
            {
                x.WithStep("StartWith", "starting:100")
                    .WithStep("MultiplyBy", "multiplier:2")
                    .WithStep("TheValueShouldBe", "expected:200")
                    .WithStep("TheValueShouldBe", "expected:300")
                    .WithStep("Subtract", "operand:5")
                    .WithStep("TheValueShouldBe", "expected:195")
                    .WithStep("Adding", "x:10, y:23.5, returnValue:33.5")
                    .WithStep("Throw");
            });


            var runner = new TestRunner();
            HtmlDocument html = runner.WritePreview(test);
        }

        [Test]
        public void try_to_write_table()
        {
            Project project = DataMother.MathProject();
            string xml =
                @"
<Test name='Bad Add 1'>
  <Math>
    <AddTable>
      <operation>
        <operation x='1' y='2' sum='4' />
        <operation x='2' y='2' sum='5' />
        <operation x='3' y='2' sum='6' />
      </operation>
    </AddTable>

  </Math>
</Test>";

            Test test = TestUtility.ReadTest(xml);
            ITestRunner runner = new TestRunner();
            runner.RunTest(test);
        }
    }

    [TestFixture]
    public class SimpleTestRunningTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            test = new Test("The First Test");

            test.Section<ArithmeticFixture>(x =>
            {
                x.WithStep("StartWith", "starting:100")
                    .WithStep("MultiplyBy", "multiplier:2")
                    .WithStep("TheValueShouldBe", "expected:200")
                    .WithStep("TheValueShouldBe", "expected:300")
                    .WithStep("Subtract", "operand:5")
                    .WithStep("Subtract", "")
                    .WithStep("TheValueShouldBe", "expected:195")
                    .WithStep("Adding", "x:10, y:23.5, returnValue:33.5")
                    .WithStep("Throw");
            });


            var runner = new TestRunner();

            runner.RunTest(test);
        }

        #endregion

        private Test test;

        [Test]
        public void got_the_counts()
        {
            test.LastResult.Counts.ShouldEqual(3, 1, 1, 1);
        }

        [Test]
        public void Smoke_test()
        {
        }
    }

    public class ArithmeticFixture : Fixture
    {
        private double _number;

        public static IStep CreateValidStep()
        {
            return new Step("MultiplyBy").With("multiplier:112.3");
        }

        public void StartWith(double starting)
        {
            _number = starting;
            say();
        }

        private void say()
        {
            Debug.WriteLine("the number is " + _number);
        }

        public void MultiplyBy(double multiplier)
        {
            _number *= multiplier;
            say();
        }

        public void Subtract(double operand)
        {
            _number -= operand;
            say();
        }

        public void Add(double operand)
        {
            _number += operand;
            say();
        }

        [FormatAs("Value should be {expected}")]
        [return: AliasAs("expected")]
        public double TheValueShouldBe()
        {
            return _number;
        }

        [FormatAs("Adding {x} to {y} should be {returnValue}")]
        public double Adding(double x, double y)
        {
            return x + y;
        }

        public void Throw()
        {
            throw new NotImplementedException();
        }
    }
}