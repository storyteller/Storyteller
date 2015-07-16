using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Messages;
using StoryTeller.Model;
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
                id = "targetSpec"
            };
            theSpecification = new Specification
            {
                id = "targetSpec"
            };
            theController = MockFor<IPersistenceController>();
            theController.Stub(x => x.LoadSpecificationById(theMessage.id)).Return(theSpecification);
            ClassUnderTest.HandleMessage(theMessage);
        }

        [Test]
        public void it_saves_the_existing_specification_by_id()
        {
            theController.AssertWasCalled(x => x.SaveSpecification(theMessage.id, theSpecification));
        }

        [Test]
        public void it_publishes_the_spec_body_saved_event()
        {
            theController.AssertWasCalled(x => x.ReloadHierarchy());
        }
    }
}
