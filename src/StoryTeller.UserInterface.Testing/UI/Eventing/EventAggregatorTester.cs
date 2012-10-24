using System.Threading;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Eventing;
using StoryTeller.UserInterface.Handlers;

namespace StoryTeller.UserInterface.Testing.UI.Eventing
{
    [TestFixture]
    public class EventAggregatorTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            SynchronizationContext.SetSynchronizationContext(new SynchronizationContext());
            handler = new StubMessage1Handler();

            events = new EventAggregator(SynchronizationContext.Current, new IHandler[] {handler});
        }

        #endregion

        private EventAggregator events;
        private StubMessage1Handler handler;

        [Test]
        public void handlers_in_constructor_function_should_be_registered_as_listeners()
        {
            var theMessage = new Message1();
            events.SendMessage(theMessage);

            handler.Message.ShouldBeTheSameAs(theMessage);
        }

        [Test]
        public void register_a_filtered_listener()
        {
            var mock = MockRepository.GenerateMock<IListener<int>>();

            object listener = events.If<int>(x => x > 5).PublishTo(x => mock.Handle(x));

            events.SendMessage(1);
            mock.AssertWasNotCalled(x => x.Handle(1));

            events.SendMessage(7);
            mock.AssertWasCalled(x => x.Handle(7));
        }


        [Test]
        public void send_message_to_all_listeners_as_an_action()
        {
            var handlerA = MockRepository.GenerateMock<IMessageHandler1>();
            var handlerB = MockRepository.GenerateMock<IMessageHandler1>();
            var handlerC = MockRepository.GenerateMock<IMessageHandler1>();

            var handlerD = MockRepository.GenerateMock<IMessageHandler2>();
            var handlerE = MockRepository.GenerateMock<IMessageHandler2>();


            events.AddListeners(handlerA, handlerB, handlerC, handlerD, handlerE);

            var message1 = new Message1();
            var message2 = new Message2();

            events.SendMessage<IMessageHandler1>(x => x.HandleMessage(message1));
            events.SendMessage<IMessageHandler2>(x => x.HandleMessage(message2));

            handlerA.AssertWasCalled(x => x.HandleMessage(message1));
            handlerB.AssertWasCalled(x => x.HandleMessage(message1));
            handlerC.AssertWasCalled(x => x.HandleMessage(message1));

            handlerD.AssertWasCalled(x => x.HandleMessage(message2));
            handlerE.AssertWasCalled(x => x.HandleMessage(message2));
        }

        [Test]
        public void send_message_to_all_listeners_for_a_message_type()
        {
            var listener1 = new StubListener<Message1>();
            var listener2 = new StubListener<Message1>();
            var listener3 = new StubListener<Message1>();
            var listener4 = new StubListener<Message2>();

            events.AddListeners(listener1, listener2, listener3, this, listener4);

            var message1 = new Message1();
            var message2 = new Message2();

            events.SendMessage(message1);
            events.SendMessage(message2);

            listener1.LastMessage.ShouldBeTheSameAs(message1);
            listener2.LastMessage.ShouldBeTheSameAs(message1);
            listener3.LastMessage.ShouldBeTheSameAs(message1);

            listener4.LastMessage.ShouldBeTheSameAs(message2);
        }

        [Test]
        public void un_register_the_filtered_listener()
        {
            var mock = MockRepository.GenerateMock<IListener<int>>();

            object listener = events.If<int>(x => x > 5).PublishTo(x => mock.Handle(x));

            events.RemoveListener(listener);

            // The listener should be completely removed
            events.SendMessage(7);
            mock.AssertWasNotCalled(x => x.Handle(7));
        }
    }


    public interface IMessageHandler1
    {
        void HandleMessage(Message1 message);
    }

    public interface IMessageHandler2
    {
        void HandleMessage(Message2 message);
    }

    public class StubListener<T> : IListener<T>
    {
        public T LastMessage { get; set; }

        #region IListener<T> Members

        public void Handle(T message)
        {
            LastMessage = message;
        }

        #endregion
    }

    public class Message1
    {
    }

    public class Message2
    {
    }

    public class StubMessage1Handler : IHandler, IListener<Message1>
    {
        public Message1 Message { get; set; }

        #region IListener<Message1> Members

        public void Handle(Message1 message)
        {
            Message = message;
        }

        #endregion
    }
}