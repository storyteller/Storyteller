using NUnit.Framework;
using Rhino.Mocks;
using Rhino.Mocks.Constraints;
using StoryTeller.Domain;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Exploring;
using Is = Rhino.Mocks.Constraints.Is;

namespace StoryTeller.UserInterface.Testing.UI.Exploring
{
    [TestFixture]
    public class when_responding_to_the_TestAdded_message_for_a_test_that_is_contained_in_the_targeted_suite :
        InteractionContext<SuitePresenter>
    {
        private Suite suite;
        private Test theTest;

        protected override void beforeEach()
        {
            suite = new Suite("Suite1");
            theTest = new Test("test1");
            suite.AddTest(theTest);

            Services.Inject(suite);

            Services.PartialMockTheClassUnderTest();
            ClassUnderTest.Expect(x => x.AddTest(theTest));

            ClassUnderTest.Handle(new TestAddedMessage(theTest));
        }

        [Test]
        public void should_add_the_new_test()
        {
            ClassUnderTest.AssertWasCalled(x => x.AddTest(theTest));
        }
    }

    [TestFixture]
    public class when_responding_to_the_TestAdded_message_for_a_test_that_is_NOT_contained_in_the_targeted_suite :
        InteractionContext<SuitePresenter>
    {
        private Suite suite;
        private Test theTest;

        protected override void beforeEach()
        {
            suite = new Suite("Suite1");
            theTest = new Test("test1");

            Services.Inject(suite);

            Services.PartialMockTheClassUnderTest();
            ClassUnderTest.Expect(x => x.AddTest(theTest)).Repeat.Never();

            ClassUnderTest.Handle(new TestAddedMessage(theTest));
        }

        [Test]
        public void should_NOT_add_the_new_test()
        {
            ClassUnderTest.AssertWasNotCalled(x => x.AddTest(theTest));
        }
    }


    [TestFixture]
    public class SuitePresenterTester : InteractionContext<SuitePresenter>
    {
        private Suite suite;

        protected override void beforeEach()
        {
            suite = new Suite("Suite1");
            Services.Inject(suite);
        }

        [Test]
        public void the_title_is_the_suite_string()
        {
            ClassUnderTest.Title.ShouldEqual(suite.ToString());
        }
    }

    [TestFixture]
    public class when_activating_the_suite_view : InteractionContext<SuitePresenter>
    {
        private Suite suite;
        private ITestLineDriver driver1;
        private ITestLineDriver driver2;
        private ITestLineDriver driver3;
        private Test test1;
        private Test test2;
        private Test test3;

        protected override void beforeEach()
        {
            suite = StoryTeller.Testing.DataMother.BuildHierarchy(@"
t1,Success
t2,Success
t3,Success
");


            test1 = suite.FindTest("t1");
            test2 = suite.FindTest("t2");
            test3 = suite.FindTest("t3");

            Services.Inject(suite);

            driver1 = MockRepository.GenerateMock<ITestLineDriver>();
            driver2 = MockRepository.GenerateMock<ITestLineDriver>();
            driver3 = MockRepository.GenerateMock<ITestLineDriver>();


            MockFor<ISuiteView>().Expect(x => x.AddTest(null, null)).Constraints(Is.Equal(test1), Is.Anything()).Return(
                driver1);
            MockFor<ISuiteView>().Expect(x => x.AddTest(null, null)).Constraints(Is.Equal(test2), Is.Anything()).Return(
                driver2);
            MockFor<ISuiteView>().Expect(x => x.AddTest(null, null)).Constraints(Is.Equal(test3), Is.Anything()).Return(
                driver3);

            MockFor<ITestService>().Expect(x => x.GetStatus(test1)).Return(TestState.Queued);
            MockFor<ITestExplorer>().Expect(x => x.IconFor(test1)).Return(Icon.Pending);

            MockFor<ITestService>().Expect(x => x.GetStatus(test2)).Return(TestState.NotQueued);
            MockFor<ITestExplorer>().Expect(x => x.IconFor(test2)).Return(Icon.Success);

            MockFor<ITestService>().Expect(x => x.GetStatus(test3)).Return(TestState.NotQueued);
            MockFor<ITestExplorer>().Expect(x => x.IconFor(test3)).Return(Icon.Failed);

            ClassUnderTest.Activate(null);
        }

        [Test]
        public void added_drivers_for_each_test()
        {
            MockFor<ISuiteView>().VerifyAllExpectations();
        }

        [Test]
        public void run_all_tests_should_enqueue_each_test()
        {
            ClassUnderTest.RunAll();

            MockFor<ITestService>().AssertWasCalled(x => x.QueueTest(test1));
            MockFor<ITestService>().AssertWasCalled(x => x.QueueTest(test2));
            MockFor<ITestService>().AssertWasCalled(x => x.QueueTest(test3));
        }

        [Test]
        public void should_clear_all_tests_first()
        {
            MockFor<ISuiteView>().AssertWasCalled(x => x.ClearAll());
        }

        [Test]
        public void should_set_up_a_driver_that_is_not_queued()
        {
            driver2.AssertWasCalled(x => x.Update(Icon.Success, false));
        }

        [Test]
        public void should_set_up_a_queued_driver_with_queueing_true()
        {
            driver1.AssertWasCalled(x => x.Update(Icon.Pending, true));
        }
    }

    [TestFixture]
    public class when_responding_to_test_icon_changed : InteractionContext<SuitePresenter>
    {
        private Suite suite;
        private Test test;
        private ITestLineDriver driver;


        protected override void beforeEach()
        {
            suite = new Suite("the suite");
            test = new Test("test 1");
            suite.AddTest(test);

            Services.Inject(suite);

            driver = MockRepository.GenerateMock<ITestLineDriver>();
            MockFor<ISuiteView>().Expect(x => x.AddTest(test, null)).Constraints(Is.Equal(test), Is.Anything()).Return(
                driver);

            ClassUnderTest.Activate(null);
        }

        [Test]
        public void when_the_test_is_in_the_queue()
        {
            MockFor<ITestService>().Expect(x => x.GetStatus(test)).Return(TestState.Executing);

            ClassUnderTest.Handle(new TestIconChanged(test, Icon.Success));

            driver.AssertWasCalled(x => x.Update(Icon.Success, true));
        }

        [Test]
        public void when_the_test_is_NOT_in_the_queue()
        {
            MockFor<ITestService>().Expect(x => x.GetStatus(test)).Return(TestState.NotQueued);

            ClassUnderTest.Handle(new TestIconChanged(test, Icon.Failed));

            driver.AssertWasCalled(x => x.Update(Icon.Failed, false));
        }
    }
}