using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Tests;

namespace StoryTeller.UserInterface.Testing.UI.Tests
{
    [TestFixture]
    public class EditTestControllerTester : InteractionContext<EditTestController>
    {
        private Test theTest;

        protected override void beforeEach()
        {
            theTest = new Test("something");
            Services.Inject(theTest);
        }

        [Test]
        public void enabled_commands_when_the_test_is_not_queued_or_executing()
        {
            MockFor<ITestService>().Stub(x => x.GetStatus(theTest)).Return(TestState.NotQueued);

            ClassUnderTest.EnableCommands();

            ClassUnderTest.RunCommand.Enabled.ShouldBeTrue();
            ClassUnderTest.CancelCommand.Enabled.ShouldBeFalse();
        }

        [Test]
        public void enabled_commands_when_the_test_is_queued()
        {
            MockFor<ITestService>().Stub(x => x.GetStatus(theTest)).Return(TestState.Queued);

            ClassUnderTest.EnableCommands();

            ClassUnderTest.RunCommand.Enabled.ShouldBeFalse();
            ClassUnderTest.CancelCommand.Enabled.ShouldBeTrue();
        }

        [Test]
        public void enabled_commands_when_the_test_is_executing()
        {
            MockFor<ITestService>().Stub(x => x.GetStatus(theTest)).Return(TestState.Executing);

            ClassUnderTest.EnableCommands();

            ClassUnderTest.RunCommand.Enabled.ShouldBeFalse();
            ClassUnderTest.CancelCommand.Enabled.ShouldBeTrue();
        }
    }

    [TestFixture]
    public class when_updating_the_screen_when_the_test_is_in_the_queue : InteractionContext<EditTestController>
    {
        private Test theTest;

        protected override void beforeEach()
        {
            theTest = new Test("something");
            Services.Inject(theTest);

            MockFor<ITestService>().Stub(x => x.GetStatus(theTest)).Return(TestState.Queued);

            ClassUnderTest.EnableCommands();
        }


        [Test]
        public void cancel_should_be_enabled()
        {
            ClassUnderTest.CancelCommand.CanExecute(null).ShouldBeTrue();
        }

        [Test]
        public void run_should_not_be_enabled()
        {
            ClassUnderTest.RunCommand.CanExecute(null).ShouldBeFalse();
        }
    }


    [TestFixture]
    public class when_updating_the_screen_when_the_test_is_not_in_the_queue : InteractionContext<EditTestController>
    {
        private Test theTest;

        protected override void beforeEach()
        {
            theTest = new Test("something");
            Services.Inject(theTest);

            MockFor<ITestService>().Stub(x => x.GetStatus(theTest)).Return(TestState.NotQueued);

            ClassUnderTest.EnableCommands();
        }

        [Test]
        public void cancel_should_not_be_enabled()
        {
            ClassUnderTest.CancelCommand.CanExecute(null).ShouldBeFalse();
        }

        [Test]
        public void run_should_be_enabled()
        {
            ClassUnderTest.RunCommand.CanExecute(null).ShouldBeTrue();
        }
    }

    [TestFixture]
    public class when_saving_the_test_successfully : InteractionContext<EditTestController>
    {
        private Test theTest;

        protected override void beforeEach()
        {
            theTest = new Test("something");
            Services.Inject(theTest);

            MockFor<ITestPresenter>().Expect(x => x.ApplyChanges()).Return(true);

            ClassUnderTest.SaveCommand.Execute(null);
        }

        [Test]
        public void the_changes_should_have_been_applied()
        {
            MockFor<ITestPresenter>().VerifyAllExpectations();
        }

        [Test]
        public void save_the_test()
        {
            MockFor<ITestService>().AssertWasCalled(x => x.Save(theTest));
        }

        [Test]
        public void record_the_last_saved_version()
        {
            MockFor<ITestStateManager>().AssertWasCalled(x => x.RecordSnapshot());
        }
    }

    [TestFixture]
    public class when_saving_the_test_with_application_failures : InteractionContext<EditTestController>
    {
        private Test theTest;

        protected override void beforeEach()
        {
            theTest = new Test("something");
            Services.Inject(theTest);

            MockFor<ITestPresenter>().Expect(x => x.ApplyChanges()).Return(false);

            ClassUnderTest.SaveCommand.Execute(null);
        }

        [Test]
        public void do_not_save_or_record_snapshot()
        {
            MockFor<ITestService>().AssertWasNotCalled(x => x.Save(theTest));
            MockFor<ITestStateManager>().AssertWasNotCalled(x => x.RecordSnapshot());
        }
    }

    [TestFixture]
    public class when_running_the_test : InteractionContext<EditTestController>
    {
        private Test theTest;

        protected override void beforeEach()
        {
            theTest = new Test("something");
            Services.Inject(theTest);

            Services.PartialMockTheClassUnderTest();

            ClassUnderTest.Expect(x => x.SaveChanges()).Return(true);

            ClassUnderTest.RunCommand.Execute(null);
        }

        [Test]
        public void the_changes_should_have_been_applied_and_saved()
        {
            ClassUnderTest.VerifyAllExpectations();
        }

        [Test]
        public void tell_the_test_service_to_enqueue_the_test()
        {
            MockFor<ITestService>().AssertWasCalled(x => x.QueueTest(theTest));
        }

    }


    [TestFixture]
    public class when_test_is_cancelled : InteractionContext<EditTestController>
    {
        private Test theTest;

        protected override void beforeEach()
        {
            theTest = new Test("something");
            Services.Inject(theTest);

            ClassUnderTest.CancelCommand.Execute(null);
        }

        [Test]
        public void the_test_should_be_cancelled()
        {
            MockFor<ITestService>().AssertWasCalled(x => x.CancelTest(theTest));
        }
    }

    public abstract class TestControllerTestingExtensions : InteractionContext<EditTestController>
    {
        protected Test theTest;

        protected sealed override void beforeEach()
        {
            theTest = new Test("something");
            Services.Inject(theTest);

            setUp();
        }

        protected abstract void setUp();

        public void TheTestIsNotInTheExecutionQueue()
        {
            MockFor<ITestService>().Expect(x => x.GetStatus(theTest)).Return(TestState.NotQueued);
        }

        public void TheTestIsCurrentlyInTheExecutionQueue()
        {
            MockFor<ITestService>().Expect(x => x.GetStatus(theTest)).Return(TestState.Queued).Repeat.Any();
        }
    }

    [TestFixture]
    public class when_the_TestController_responds_to_the_test_being_executed : TestControllerTestingExtensions
    {
        protected override void setUp()
        {
            TheTestIsCurrentlyInTheExecutionQueue();
        }


        [Test]
        public void run_should_not_be_enabled()
        {
            SpecificationExtensions.As<IListener<TestRunEvent>>(ClassUnderTest).Handle(new TestRunEvent(theTest, TestState.Executing));
            ClassUnderTest.RunCommand.CanExecute(null).ShouldBeFalse();
        }


        [Test]
        public void cancel_should_be_enabled()
        {
            SpecificationExtensions.As<IListener<TestRunEvent>>(ClassUnderTest).Handle(new TestRunEvent(theTest, TestState.Executing));
            ClassUnderTest.CancelCommand.CanExecute(null).ShouldBeTrue();
        }
    }
}