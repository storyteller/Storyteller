using Xunit;
using Rhino.Mocks;
using Shouldly;
using StoryTeller.Messages;
using StoryTeller.Model;
using StoryTeller.Remotes;
using StoryTeller.Testing.Results;
using ST.Client;
using ST.Client.Persistence;

namespace StoryTeller.Testing.ST
{
    public class BumpSpecDateCommandTester : InteractionContext<BumpSpecDateCommand>
    {
        public BumpSpecDate theMessage;
        private Specification theSpecification;
        private IPersistenceController theController;

        protected override void beforeEach()
        {
            theMessage = new BumpSpecDate
            {
                id = "targetSpec",
                timePeriod = 6
            };
            theSpecification = new Specification
            {
                id = "targetSpec",
                ExpirationPeriod = 0
            };
            theController = MockFor<IPersistenceController>();
            theController.Stub(x => x.LoadSpecificationById(theMessage.id)).Return(theSpecification);
            ClassUnderTest.HandleMessage(theMessage);
        }

        [Fact]
        public void it_updates_the_spec_expiration_period()
        {
            theSpecification.ExpirationPeriod.ShouldBe(6);
        }

        [Fact]
        public void it_saves_the_existing_specification_by_id()
        {
            theController.AssertWasCalled(x => x.SaveSpecification(theMessage.id, theSpecification));
        }

        [Fact]
        public void it_publishes_the_spec_body_saved_event()
        {
            Services.Get<IClientConnector>()
                .AssertWasCalled(x => x.SendMessageToClient(Arg<SpecSaved>.Matches(y => y.spec.Equals(theSpecification))));
        }
    }
}
