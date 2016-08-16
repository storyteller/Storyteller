using NSubstitute;
using Shouldly;
using StoryTeller.Messages;
using StoryTeller.Model;
using ST.Client;
using ST.Client.Persistence;
using Xunit;

namespace StoryTeller.Testing.ST
{
    public class BumpSpecDateCommandTester : InteractionContext<BumpSpecDateCommand>
    {
        public BumpSpecDateCommandTester()
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
            theController.LoadSpecificationById(theMessage.id).Returns(theSpecification);

            ClassUnderTest.HandleMessage(theMessage);
        }

        public BumpSpecDate theMessage;
        private readonly Specification theSpecification;
        private readonly IPersistenceController theController;

        [Fact]
        public void it_publishes_the_spec_body_saved_event()
        {
            MockFor<IClientConnector>()
                .Received()
                .SendMessageToClient(Arg.Is<SpecSaved>(y => y.spec.Equals(theSpecification)));
        }

        [Fact]
        public void it_saves_the_existing_specification_by_id()
        {
            theController.Received().SaveSpecification(theMessage.id, theSpecification);
        }


        [Fact]
        public void it_updates_the_spec_expiration_period()
        {
            theSpecification.ExpirationPeriod.ShouldBe(6);
        }
    }
}