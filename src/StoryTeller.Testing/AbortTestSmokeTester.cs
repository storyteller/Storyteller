using System.Diagnostics;
using System.Threading;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Execution;

namespace StoryTeller.Testing
{
    [TestFixture, Explicit]
    public class AbortTestSmokeTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            runner = new TestRunner();
            test = new Test("slow test").With(Section.For<SlowFixture>().WithStep("GoSlow"));

            var reset = new ManualResetEvent(false);
            var running = new ManualResetEvent(false);

            var thread = new Thread(() =>
            {
                running.Set();
                Debug.WriteLine("Starting to run");
                test.LastResult = runner.RunTest(new TestExecutionRequest()
                {
                    Test = test,
                    TimeoutInSeconds = 60
                });

                test.LastResult.ShouldNotBeNull();
                Debug.WriteLine("finished running");
                reset.Set();
            });

            thread.Start();
            running.WaitOne();
            Thread.Sleep(1000);

            Debug.WriteLine("Aborting now!");
            runner.Abort();
            Debug.WriteLine("Done aborting");


            reset.WaitOne(5000);
            test.LastResult.ShouldNotBeNull();

            test.LastResult.WasCancelled.ShouldBeTrue();

            Debug.WriteLine("completely done");
        }

        #endregion

        private ITestRunner runner;
        private Test test;

        [Test, Explicit]
        public void test_exception_should_include_message_about_being_aborted()
        {
            test.LastResult.ExceptionText.ShouldContain("Test Execution was forcibly aborted");
        }

        [Test]
        public void test_should_be_marked_with_an_exception()
        {
            test.LastResult.Counts.Exceptions.ShouldBeGreaterThan(0);
        }
    }

    public class SlowFixture : Fixture
    {
        public void GoSlow()
        {
            Thread.Sleep(8000);
        }
    }
}