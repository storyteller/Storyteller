using System;
using Xunit;
using Rhino.Mocks;
using ST.Client;
using ST.Client.Persistence;
using StoryTeller.Messages;
using StoryTeller.Model;

namespace StoryTeller.Testing.ST
{
    
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

        [Fact]
        public void should_have_persisted_the_spec_body()
        {
            MockFor<IPersistenceController>().AssertWasCalled(x => x.SaveSpecification(theInputMessage.id, theInputMessage.spec));
        }

    }
}