using System;
using System.Threading;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Execution;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class when_running_a_test_that_times_out
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            runner = new TestRunner();
                
            test = new Test("fake").Section<TimeoutFixture>(x => { x.WithStep("Go"); });

            runner.RunTest(new TestExecutionRequest()
            {
                Test = test,
                TimeoutInSeconds = 1
            });
        }

        #endregion

        private ITestRunner runner;
        private Test test;

        [Test]
        public void should_have_the_timeout_message()
        {
            test.LastResult.ExceptionText.ShouldContain("Timed Out");
        }

        [Test]
        public void should_increment_exceptions()
        {
            test.LastResult.Counts.Exceptions.ShouldBeGreaterThan(1);
        }
    }

    public class TimeoutFixture : Fixture
    {
        public void Go()
        {
            Thread.Sleep(new TimeSpan(0, 0, 60));
        }
    }
}