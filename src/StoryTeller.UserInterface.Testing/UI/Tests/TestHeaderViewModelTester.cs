using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Execution;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Tests;

namespace StoryTeller.UserInterface.Testing.UI.Tests
{
    [TestFixture]
    public class when_responding_to_binary_recycle_completed : InteractionContext<TestHeaderViewModel>
    {
        private Test theTest;

        protected override void beforeEach()
        {
            theTest = new Test("something");
        
            Services.Inject(theTest);
        }

        [Test]
        public void when_the_auto_run_is_false_do_not_run_the_test()
        {
            ClassUnderTest.AutoRun = false;
            ClassUnderTest.HandleMessage(new BinaryRecycleFinished(null));

            MockFor<ITestService>().AssertWasNotCalled(x => x.QueueTest(theTest));
        }

        [Test]
        public void when_the_auto_run_is__true_run_the_test()
        {
            ClassUnderTest.AutoRun = true;
            ClassUnderTest.HandleMessage(new BinaryRecycleFinished(null));

            MockFor<ITestService>().AssertWasCalled(x => x.QueueTest(theTest));
        }
    }


    [TestFixture]
    public class when_toggling_the_test_lifecycle : InteractionContext<TestHeaderViewModel>
    {
        private Test theTest;

        protected override void beforeEach()
        {
            theTest = new Test("some test");
            theTest.Lifecycle.ShouldEqual(Lifecycle.Acceptance);

            Services.Inject(theTest);

            ClassUnderTest.ToggleLifecycle();
        }

        [Test]
        public void should_refresh_the_view()
        {
            MockFor<ITestHeaderView>().AssertWasCalled(x => x.Refresh());
        }

        [Test]
        public void should_save_the_test()
        {
            MockFor<ITestService>().AssertWasCalled(x => x.Save(theTest));
        }

        [Test]
        public void should_toggle_the_lifecycle_of_the_test()
        {
            theTest.Lifecycle.ShouldEqual(Lifecycle.Regression);
        }

        [Test]
        public void the_lifecycle_property_of_the_view_model_should_be_the_new_test_lifecycle()
        {
            ClassUnderTest.Lifecycle.ShouldEqual(Lifecycle.Regression.ToString());
        }
    }

    [TestFixture]
    public class TestHeaderViewModelTester : InteractionContext<TestHeaderViewModel>
    {
        private Test theTest;

        protected override void beforeEach()
        {
            theTest = new Test("some test");
            Services.Inject(theTest);
        }

        [Test]
        public void setting_the_name_renames_the_test_with_the_test_service()
        {
            ClassUnderTest.Name = "new name";
            MockFor<ITestService>().AssertWasCalled(x => x.RenameTest(theTest, "new name"));
        }

        [Test]
        public void update_status_when_the_test_is_executing()
        {
            MockFor<ITestService>().Stub(x => x.GetStatus(theTest)).Return(TestState.Executing);

            ClassUnderTest.Update();

            ClassUnderTest.Status.ShouldEqual("Executing");
        }

        [Test]
        public void update_status_when_the_test_is_not_in_the_queue_with_a_result()
        {
            theTest = StoryTeller.Testing.DataMother.SuccessfulTest();
            Services.Inject(theTest);

            MockFor<ITestService>().Stub(x => x.GetStatus(theTest)).Return(TestState.NotQueued);

            ClassUnderTest.Update();

            ClassUnderTest.Status.ShouldEqual(theTest.GetStatus());
        }

        [Test]
        public void update_status_when_the_test_is_queued()
        {
            MockFor<ITestService>().Stub(x => x.GetStatus(theTest)).Return(TestState.Queued);

            ClassUnderTest.Update();

            ClassUnderTest.Status.ShouldEqual("Queued");
        }

        [Test]
        public void update_status_with_no_result_and_not_queued()
        {
            theTest.HasResult().ShouldBeFalse();

            MockFor<ITestService>().Stub(x => x.GetStatus(theTest)).Return(TestState.NotQueued);
            ClassUnderTest.Update();
            ClassUnderTest.Status.ShouldEqual(string.Empty);
        }
    }
}