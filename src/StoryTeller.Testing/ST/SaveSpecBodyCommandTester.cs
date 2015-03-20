using System;
using NUnit.Framework;
using Rhino.Mocks;
using ST.Client;
using ST.Client.Persistence;
using StoryTeller.Messages;
using StoryTeller.Model;

namespace StoryTeller.Testing.ST
{
    [TestFixture]
    public class SaveSpecBodyCommandTester : InteractionContext<SaveSpecBodyCommand>
    {
        private SaveSpecBody theInputMessage;

        protected override void beforeEach()
        {
            theInputMessage = new SaveSpecBody
            {
                id = Guid.NewGuid().ToString(),
                revision = Guid.NewGuid().ToString(),
                spec = new Specification()
            };

            ClassUnderTest.HandleMessage(theInputMessage);
        }

        [Test]
        public void should_have_persisted_the_spec_body()
        {
            MockFor<IPersistenceController>().AssertWasCalled(x => x.SaveSpecificationBody(theInputMessage.id, theInputMessage.spec));
        }

        [Test]
        public void should_send_a_response_to_the_client()
        {
            MockFor<IClientConnector>().AssertWasCalled(x => x.SendMessageToClient(new SpecBodySaved
            {
                id = theInputMessage.id,
                revision = theInputMessage.revision
            }));
        }
    }
}