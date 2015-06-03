using System;
using NUnit.Framework;
using Rhino.Mocks;
using ST.Client;
using ST.Client.Persistence;
using StoryTeller.Messages;
using StoryTeller.Model;
using StoryTeller.Remotes;

namespace StoryTeller.Testing.ST.Persistence
{
    [TestFixture]
    public class RunSpecCommandTester : InteractionContext<RunSpecCommand>
    {
        [Test]
        public void run_spec_by_id_only()
        {
            var theSpecRetrievedFromPersistence = new Specification();

            MockFor<IPersistenceController>().Stub(x => x.LoadSpecification("foo"))
                .Return(new SpecData
                {
                    data = theSpecRetrievedFromPersistence
                });

            var theMessage = new RunSpec{id = "foo"};
            ClassUnderTest.HandleMessage(theMessage);

            MockFor<IRemoteController>().AssertWasCalled(x => x.SendMessage(theMessage));

            theMessage.spec.ShouldBeTheSameAs(theSpecRetrievedFromPersistence);
        }

        [Test]
        public void run_spec_with_body_but_no_revision()
        {
            var theSpecSentFromTheClient = new Specification();

            var theMessage = new RunSpec
            {
                revision = null,
                spec = theSpecSentFromTheClient,
                id = "foo"
            };

            ClassUnderTest.HandleMessage(theMessage);

            MockFor<IRemoteController>().AssertWasCalled(x => x.SendMessage(theMessage));

            // do not auto-save
            MockFor<IPersistenceController>().AssertWasNotCalled(x => x.SaveSpecification("foo", theSpecSentFromTheClient));

        }

        [Test]
        public void run_spec_with_body_and_revision_denoting_auto_save()
        {
            var theSpecSentFromTheClient = new Specification();

            var theMessage = new RunSpec
            {
                revision = Guid.NewGuid().ToString(),
                spec = theSpecSentFromTheClient,
                id = "foo"
            };

            ClassUnderTest.HandleMessage(theMessage);

            MockFor<IRemoteController>().AssertWasCalled(x => x.SendMessage(theMessage));

            // *do* auto-save
            MockFor<IPersistenceController>().AssertWasCalled(x => x.SaveSpecification("foo", theSpecSentFromTheClient));

        }
    }
}