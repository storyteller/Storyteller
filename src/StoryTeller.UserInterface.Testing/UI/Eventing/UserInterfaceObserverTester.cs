using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Execution;
using StoryTeller.Testing;

namespace StoryTeller.UserInterface.Testing.UI.Eventing
{

    [TestFixture]
    public class UserInterfaceObserverTester : InteractionContext<UserInterfaceTestObserver>
    {
        private Test _test;

        protected override void beforeEach()
        {
            _test = new Test("some test");
            Services.Inject(new TestExecutionRequest()
            {
                Test = _test
            });
        }

        [Test]
        public void can_continue()
        {
            var observer = new UserInterfaceTestObserver(null, new TestExecutionRequest()
            {
                BreakOnWrongs = false,
                BreakOnExceptions = false
            });

            observer.CanContinue(StoryTeller.Testing.DataMother.FailedTest().LastResult.Counts).ShouldBeTrue();
            observer.CanContinue(StoryTeller.Testing.DataMother.ExceptionTest().LastResult.Counts).ShouldBeTrue();
            observer.CanContinue(StoryTeller.Testing.DataMother.SuccessfulTest().LastResult.Counts).ShouldBeTrue();
            observer.CanContinue(new Counts()).ShouldBeTrue();

            observer = new UserInterfaceTestObserver(null, new TestExecutionRequest()
            {
                BreakOnWrongs = true,
                BreakOnExceptions = false
            });

            observer.CanContinue(StoryTeller.Testing.DataMother.FailedTest().LastResult.Counts).ShouldBeFalse();
            observer.CanContinue(StoryTeller.Testing.DataMother.ExceptionTest().LastResult.Counts).ShouldBeTrue();
            observer.CanContinue(StoryTeller.Testing.DataMother.SuccessfulTest().LastResult.Counts).ShouldBeTrue();
            observer.CanContinue(new Counts()).ShouldBeTrue();

            observer = new UserInterfaceTestObserver(null, new TestExecutionRequest()
            {
                BreakOnWrongs = false,
                BreakOnExceptions = true
            });

            observer.CanContinue(StoryTeller.Testing.DataMother.FailedTest().LastResult.Counts).ShouldBeTrue();
            observer.CanContinue(StoryTeller.Testing.DataMother.ExceptionTest().LastResult.Counts).ShouldBeFalse();
            observer.CanContinue(StoryTeller.Testing.DataMother.SuccessfulTest().LastResult.Counts).ShouldBeTrue();
            observer.CanContinue(new Counts()).ShouldBeTrue();


            observer = new UserInterfaceTestObserver(null, new TestExecutionRequest()
            {
                BreakOnWrongs = true,
                BreakOnExceptions = true
            });

            observer.CanContinue(StoryTeller.Testing.DataMother.FailedTest().LastResult.Counts).ShouldBeFalse();
            observer.CanContinue(StoryTeller.Testing.DataMother.ExceptionTest().LastResult.Counts).ShouldBeFalse();
            observer.CanContinue(StoryTeller.Testing.DataMother.SuccessfulTest().LastResult.Counts).ShouldBeTrue();
            observer.CanContinue(new Counts()).ShouldBeTrue();
        }


        [Test]
        public void finishing_section_publishes_message()
        {
            Services.PartialMockTheClassUnderTest();
            var section = new Section("Math");

            ClassUnderTest.Expect(x => x.FinishPart(section));

            ClassUnderTest.CallOn<ITestObserver>(x => x.FinishSection(section));

            ClassUnderTest.VerifyAllExpectations();
        }


        [Test]
        public void finishing_step_publishes_message()
        {
            Services.PartialMockTheClassUnderTest();
            var step = new Step("something");

            ClassUnderTest.Expect(x => x.FinishPart(step));

            ClassUnderTest.CallOn<ITestObserver>(x => x.FinishStep(step));

            ClassUnderTest.VerifyAllExpectations();
        }

        [Test]
        public void finishing_the_test_should_publish()
        {
            Services.PartialMockTheClassUnderTest();

            ClassUnderTest.Expect(x => x.Publish());

            ClassUnderTest.CallOn<ITestObserver>(x => x.FinishTest(new Test("something")));

            ClassUnderTest.VerifyAllExpectations();
        }

        [Test]
        public void get_status_after_starting_and_ending_a_test()
        {
            var test = new Test("something")
            {
                LastResult = new TestResult()
                {
                    Counts = new Counts()
                }
            };
            test.LastResult.Counts.IncrementRights();

            ClassUnderTest.CallOn<ITestObserver>(x => x.StartTest(test, test.LastResult.Counts));
            ClassUnderTest.CallOn<ITestObserver>(x => x.FinishTest(test));

            TestStatusMessage status = ClassUnderTest.GetStatus();

            status.IsRunning.ShouldBeFalse();
        }

        [Test]
        public void get_status_from_the_current_progression_after_a_new_test_is_started()
        {
            var test = new Test("something")
            {
                LastResult = new TestResult()
                {
                    Counts = new Counts()
                }
            };
            test.LastResult.Counts.IncrementRights();

            ClassUnderTest.CallOn<ITestObserver>(x => x.StartTest(test, test.LastResult.Counts));

            TestStatusMessage status = ClassUnderTest.GetStatus();

            status.IsRunning.ShouldBeTrue();
        }

        [Test]
        public void get_the_status_when_nothing_is_running_and_a_prior_test_result()
        {
            var test = new Test("something")
            {
                LastResult = new TestResult()
                {
                    Counts = new Counts()
                }
            };
            test.LastResult.Counts.IncrementRights();

            ClassUnderTest.CallOn<ITestObserver>(x => x.FinishTest(test));

            TestStatusMessage status = ClassUnderTest.GetStatus();

            status.TestPath.ShouldEqual(test.LocatorPath());
            status.IsRunning.ShouldBeFalse();
            status.Status.ShouldEqual(test.GetStatus());
        }

        [Test]
        public void starting_from_no_state_get_the_test_status()
        {
            TestStatusMessage status = ClassUnderTest.GetStatus();

            status.IsRunning.ShouldBeFalse();
            status.Status.ShouldBeNull();
        }

        [Test]
        public void starting_section_publishes_message()
        {
            Services.PartialMockTheClassUnderTest();
            var section = new Section("Math");

            ClassUnderTest.Expect(x => x.StartPart(section));

            ClassUnderTest.CallOn<ITestObserver>(x => x.StartSection(section));

            ClassUnderTest.VerifyAllExpectations();
        }

        [Test]
        public void starting_step_publishes_message()
        {
            Services.PartialMockTheClassUnderTest();
            var step = new Step("something");

            ClassUnderTest.Expect(x => x.StartPart(step));

            ClassUnderTest.CallOn<ITestObserver>(x => x.StartStep(step));

            ClassUnderTest.VerifyAllExpectations();
        }

        [Test]
        public void starting_the_test_should_publish()
        {
            Services.PartialMockTheClassUnderTest();

            ClassUnderTest.Expect(x => x.Publish());

            ClassUnderTest.CallOn<ITestObserver>(x => x.StartTest(new Test("something"), new Counts()));

            ClassUnderTest.VerifyAllExpectations();
        }
    }
}