using System.Threading;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Eventing;
using StoryTeller.UserInterface.Handlers;

namespace StoryTeller.UserInterface.Testing.UI
{
    [TestFixture]
    public class when_closing_screens_and_something_is_dirty_and_user_chooses_not_to_close :
        InteractionContext<ScreenConductor>
    {
        private EventAggregator events;
        private bool didClose;

        protected override void beforeEach()
        {
            events = new EventAggregator(new SynchronizationContext(), new IHandler[0]);
            Services.Inject<IEventAggregator>(events);

            events.AddListener(new CloseableThatCannotBeClosed());
            events.AddListener(MockFor<ICloseable>());

            MockFor<IMessageCreator>().Expect(
                x => x.AskUser(ScreenConductor.CAN_CLOSE_TITLE, "Test1 has unsaved changes\nTests are running")).
                Return(UserMessageResponse.No);

            didClose = ClassUnderTest.CanClose();
        }

        [Test]
        public void asked_the_user_if_it_was_okay_to_close()
        {
            MockFor<IMessageCreator>().VerifyAllExpectations();
        }

        [Test]
        public void did_not_tell_the_closeables_to_close()
        {
            MockFor<ICloseable>().AssertWasNotCalled(x => x.PerformShutdown());
        }

        [Test]
        public void should_not_close_the_screen()
        {
            didClose.ShouldBeFalse();
        }
    }

    [TestFixture]
    public class when_closing_screens_and_something_is_dirty_and_user_chooses_to_force_the_app_to_close :
        InteractionContext<ScreenConductor>
    {
        private EventAggregator events;
        private bool didClose;

        protected override void beforeEach()
        {
            events = new EventAggregator(new SynchronizationContext(), new IHandler[0]);
            Services.Inject<IEventAggregator>(events);

            events.AddListener(new CloseableThatCannotBeClosed());
            events.AddListener(MockFor<ICloseable>());

            MockFor<IMessageCreator>().Expect(
                x => x.AskUser(ScreenConductor.CAN_CLOSE_TITLE, "Test1 has unsaved changes\nTests are running")).
                Return(UserMessageResponse.Yes);

            didClose = ClassUnderTest.CanClose();
        }

        [Test]
        public void asked_the_user_if_it_was_okay_to_close()
        {
            MockFor<IMessageCreator>().VerifyAllExpectations();
        }

        [Test]
        public void should_close_the_screen()
        {
            didClose.ShouldBeTrue();
        }

        [Test]
        public void should_tell_the_closeables_to_close()
        {
            MockFor<ICloseable>().AssertWasCalled(x => x.PerformShutdown());
        }
    }

    [TestFixture]
    public class when_closing_screens_and_nothing_is_dirty : InteractionContext<ScreenConductor>
    {
        private EventAggregator events;
        private bool didClose;

        protected override void beforeEach()
        {
            events = new EventAggregator(new SynchronizationContext(), new IHandler[0]);
            Services.Inject<IEventAggregator>(events);

            events.AddListener(MockFor<ICloseable>());

            MockFor<IMessageCreator>().Expect(
                x => x.AskUser(ScreenConductor.CAN_CLOSE_TITLE, "Test1 has unsaved changes\nTests are running")).
                Return(UserMessageResponse.No);

            didClose = ClassUnderTest.CanClose();
        }

        [Test]
        public void should_have_closed_the_screen()
        {
            didClose.ShouldBeTrue();
        }

        [Test]
        public void should_have_forced_the_closeables_to_close()
        {
            MockFor<ICloseable>().AssertWasCalled(x => x.PerformShutdown());
        }

        [Test]
        public void should_not_have_shown_a_message_box()
        {
            MockFor<IMessageCreator>().AssertWasNotCalled(x => x.AskUser(null, null), x => x.IgnoreArguments());
        }
    }


    public class CloseableThatCannotBeClosed : ICloseable
    {
        #region ICloseable Members

        public void AddCanCloseMessages(CloseToken token)
        {
            token.AddMessage("Test1 has unsaved changes");
            token.AddMessage("Tests are running");
        }

        public void PerformShutdown()
        {
        }

        #endregion
    }
}