using System;
using System.Threading;
using NUnit.Framework;
using StoryTeller.Execution;
using Rhino.Mocks;

namespace StoryTeller.Testing
{
    [TestFixture]
    public class EventPublisherTester : InteractionContext<EventPublisher>
    {
        protected override void beforeEach()
        {
            
        }

        [Test]
        public void relays_to_the_event_aggregator()
        {
            var failure = new BinaryRecycleFailure();
            ClassUnderTest.Publish(failure);
            Thread.Sleep(200); // tiny pause to wait for thread
            MockFor<IEventAggregator>().AssertWasCalled(x => x.SendMessage(failure));
        }

        [Test]
        public void does_not_blow_up_on_null_messages()
        {
            ClassUnderTest.Publish(null);
        }
    }
}