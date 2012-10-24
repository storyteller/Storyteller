using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Exploring;
using StoryTeller.UserInterface.Running;
using Rhino.Mocks;

namespace StoryTeller.UserInterface.Testing.UI.Exploring
{
    [TestFixture]
    public class IconServiceTester : InteractionContext<IconService>
    {
        private Test theTest;

        protected override void beforeEach()
        {
            theTest = new Test("something");
        }

        private void IsNotQueuedOrExecuting()
        {
            MockFor<IExecutionQueue>().Stub(x => x.IsQueued(theTest)).Return(false);
            MockFor<IExecutionQueue>().Stub(x => x.IsExecuting()).Return(false);

        }

        private void IsQueued()
        {
            MockFor<IExecutionQueue>().Stub(x => x.IsQueued(theTest)).Return(true);
        }

        private void IsExecuting()
        {
            MockFor<IExecutionQueue>().Stub(x => x.IsQueued(theTest)).Return(false);
            MockFor<IExecutionQueue>().Stub(x => x.IsExecuting()).Return(true);
            MockFor<IExecutionQueue>().Stub(x => x.ExecutingTest).Return(theTest);
        }

        private void HasSuccessfulResult()
        {
            theTest.LastResult = new TestResult(){Counts = new Counts(1, 0, 0, 0)};
        }

        private void HasFailedResult()
        {
            theTest.LastResult = new TestResult() { Counts = new Counts(1, 1, 0, 0) };
        }

        private void HasNoResult()
        {
            theTest.LastResult = null;
        }

        private Icon IconShouldBe
        {
            set
            {
                ClassUnderTest.IconFor(theTest).ShouldEqual(value);
            }
        }

        [Test]
        public void when_the_test_has_no_result_and_is_not_queued_or_executing()
        {
            IsNotQueuedOrExecuting();
            HasNoResult();

            IconShouldBe = Icon.Unknown;
        }

        [Test]
        public void when_the_test_is_queued_with_no_previous_result()
        {
            IsQueued();
            HasNoResult();

            IconShouldBe = Icon.Pending;
        }

        [Test]
        public void when_the_test_is_queued_with_a_previous_result()
        {
            IsQueued();
            HasSuccessfulResult();

            IconShouldBe = Icon.Pending;
        }

        [Test]
        public void when_the_test_is_executing_and_has_not_previous_result()
        {
            IsExecuting();
            HasNoResult();

            IconShouldBe = Icon.RunningSuccess;
        }

        [Test]
        public void when_the_test_is_executing_and_has_a_previous_successful_run()
        {
            IsExecuting();
            HasSuccessfulResult();

            IconShouldBe = Icon.RunningSuccess;
        }

        [Test]
        public void when_the_test_is_executing_and_has_a_previous_failed_run()
        {
            IsExecuting();
            HasFailedResult();

            IconShouldBe = Icon.RunningFailure;
        }

        [Test]
        public void when_the_test_is_not_queued_or_executing_and_has_successful_result()
        {
            IsNotQueuedOrExecuting();
            HasSuccessfulResult();

            IconShouldBe = Icon.Success;
        }

        [Test]
        public void when_the_test_is_not_queued_and_has_failed_results()
        {
            IsNotQueuedOrExecuting();
            HasFailedResult();

            IconShouldBe = Icon.Failed;
        }
    }
}