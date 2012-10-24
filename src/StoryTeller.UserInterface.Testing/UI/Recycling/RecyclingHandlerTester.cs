using NUnit.Framework;
using StoryTeller.Execution;
using StoryTeller.Model;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Recycling;
using Rhino.Mocks;

namespace StoryTeller.UserInterface.Testing.UI.Recycling
{
    [TestFixture]
    public class when_responding_to_the_binary_recycle_started_message : InteractionContext<RecyclingHandler>
    {
        protected override void beforeEach()
        {
            ClassUnderTest.Handle(new BinaryRecycleStarted());
        }

        [Test]
        public void should_lock_the_shell()
        {
            MockFor<IApplicationShell>().AssertWasCalled(x => x.LockAsBusy());
        }

        [Test]
        public void should_show_the_recycling_progress_dialog()
        {
            MockFor<IBinaryRecyclingDialog>().AssertWasCalled(x => x.Start());
        }
    }

    [TestFixture]
    public class when_handling_the_recycle_failure_message : InteractionContext<RecyclingHandler>
    {
        protected override void beforeEach()
        {
            ClassUnderTest.Handle(new BinaryRecycleFailure());
        }

        [Test]
        public void should_make_the_shell_go_into_invalid_binary_mode()
        {
            MockFor<IApplicationShell>().AssertWasCalled(x => x.LockAsInvalidBinaryState());
        }

        [Test]
        public void should_hide_the_dialog()
        {
            MockFor<IBinaryRecyclingDialog>().AssertWasCalled(x => x.Hide());
        }
    }

    [TestFixture]
    public class when_handling_the_recycle_message_message : InteractionContext<RecyclingHandler>
    {
        protected override void beforeEach()
        {
            ClassUnderTest.Handle(new BinaryRecycleMessage(){Message = "some message"});
        }

        [Test]
        public void should_show_the_status_message_in_the_dialog()
        {
            MockFor<IBinaryRecyclingDialog>().AssertWasCalled(x => x.ShowMessage("some message"));
        }
    }

    [TestFixture]
    public class when_handling_the_recycle_status_message : InteractionContext<RecyclingHandler>
    {
        protected override void beforeEach()
        {
            ClassUnderTest.Handle(new BinaryRecycleProcess(){FixtureName = "Math", Index = 3, Total = 5});
        }

        [Test]
        public void should_relay_the_progress_to_the_dialog()
        {
            MockFor<IBinaryRecyclingDialog>().AssertWasCalled(x => x.ShowProgress(5, 3, "Math"));
        }
    }

    [TestFixture]
    public class when_handling_the_recycle_finished_message : InteractionContext<RecyclingHandler>
    {
        protected override void beforeEach()
        {
            ClassUnderTest.Handle(new BinaryRecycleFinished(new FixtureLibrary()));
        }

        [Test]
        public void should_hide_the_dialog()
        {
            MockFor<IBinaryRecyclingDialog>().AssertWasCalled(x => x.Hide());
        }

        [Test]
        public void should_completely_unlock_the_shell()
        {
            MockFor<IApplicationShell>().AssertWasCalled(x => x.Unlock());
        }
    }
}