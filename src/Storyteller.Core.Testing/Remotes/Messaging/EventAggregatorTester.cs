using System.Linq;
using FubuTestingSupport;
using NUnit.Framework;
using Storyteller.Core.Remotes.Messaging;

namespace Storyteller.Core.Testing.Remotes.Messaging
{
    [TestFixture]
    public class EventAggregatorTester
    {
        private RecordingListener theListener;

        [TearDown]
        public void Teardown()
        {
            EventAggregator.Stop();
        }

        [SetUp]
        public void SetUp()
        {
            theListener = new RecordingListener();
            var hub = new MessagingHub();
            hub.AddListener(theListener);

            var remoteListener = new RemoteListener(hub);
            EventAggregator.Start(remoteListener);
        }

        [Test]
        public void send_message_by_category()
        {
            EventAggregator.SendMessage("category1", "some message");

            var expected = new ServiceMessage
            {
                Category = "category1", Message = "some message"
            };

            Wait.Until(() => theListener.Received.Contains(expected));

            theListener.Received.OfType<ServiceMessage>().Single()
                       .ShouldEqual(expected);

        }
    }
}