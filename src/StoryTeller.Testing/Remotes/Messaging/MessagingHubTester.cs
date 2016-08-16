using Xunit;
using Rhino.Mocks;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Testing.Remotes.Messaging
{
    
    public class MessagingHubTester
    {
        private MessagingHub theHub;
        private IListener listener1;
        private IListener listener2;
        private IListener listener3;
        private IListener<Message1> listener4;
        private IListener<Message1> listener5;
        private IListener<Message1> listener6;
        private IListener<Message2> listener7;
        private IListener<Message2> listener8;

        public MessagingHubTester()
        {
            theHub = new MessagingHub();

            listener1 = createListener();
            listener2 = createListener();
            listener3 = createListener();

            listener4 = createListener<Message1>();
            listener5 = createListener<Message1>();
            listener6 = createListener<Message1>();
            listener7 = createListener<Message2>();
            listener8 = createListener<Message2>();
        }

        private IListener createListener()
        {
            var listener = MockRepository.GenerateMock<IListener>();
            theHub.AddListener(listener);

            return listener;
        }

        private IListener<T> createListener<T>()
        {
            var listener = MockRepository.GenerateMock<IListener<T>>();
            theHub.AddListener(listener);

            return listener;
        }

        [Fact]
        public void send_a_message_to_generic_listeners()
        {
            var message = new Message1 {Name = "this one"};

            theHub.Send(message);

            listener1.AssertWasCalled(x => x.Receive(message));
            listener2.AssertWasCalled(x => x.Receive(message));
            listener3.AssertWasCalled(x => x.Receive(message));

        }

        [Fact]
        public void send_a_message_to_all_listeners_for_that_specific_message()
        {
            var message = new Message1 { Name = "this one" };

            theHub.Send(message);

            listener4.AssertWasCalled(x => x.Receive(message));
            listener5.AssertWasCalled(x => x.Receive(message));
            listener6.AssertWasCalled(x => x.Receive(message));
        }

        [Fact]
        public void send_a_message_to_all_listeners_2()
        {
            var message = new Message2 { Name = "that one" };

            theHub.Send(message);

            listener1.AssertWasCalled(x => x.Receive(message));
            listener2.AssertWasCalled(x => x.Receive(message));
            listener3.AssertWasCalled(x => x.Receive(message));
            
            listener7.AssertWasCalled(x => x.Receive(message));
            listener8.AssertWasCalled(x => x.Receive(message));
        }

        [Fact]
        public void send_json_message()
        {
            var message = new Message2 { Name = "that one" };


            var json = JsonSerialization.ToJson(message);
            theHub.SendJson(json);

            listener1.AssertWasCalled(x => x.Receive(message));
            listener2.AssertWasCalled(x => x.Receive(message));
            listener3.AssertWasCalled(x => x.Receive(message));

            listener7.AssertWasCalled(x => x.Receive(message));
            listener8.AssertWasCalled(x => x.Receive(message));
        }
    }
}