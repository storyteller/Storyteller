using System;
using Xunit;
using NSubstitute;
using ST.Client;
using ST.Client.Persistence;
using StoryTeller.Messages;
using StoryTeller.Model;
using StoryTeller.Remotes;

namespace StoryTeller.Testing.ST.Persistence
{
    
    public class RunSpecCommandTester : InteractionContext<RunSpecCommand>
    {
        [Fact]
        public void run_spec_by_id_only()
        {
            var theSpecRetrievedFromPersistence = new Specification();

            MockFor<IPersistenceController>().LoadSpecification("foo")
                .Returns(new SpecData
                {
                    data = theSpecRetrievedFromPersistence
                });

            var theMessage = new RunSpec{id = "foo"};
            ClassUnderTest.HandleMessage(theMessage);

            MockFor<IRemoteController>().Received().SendMessage(theMessage);

            theMessage.spec.ShouldBeTheSameAs(theSpecRetrievedFromPersistence);
        }

        [Fact]
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

            MockFor<IRemoteController>().Received().SendMessage(theMessage);

            // do not auto-save
            MockFor<IPersistenceController>().DidNotReceive().SaveSpecification("foo", theSpecSentFromTheClient);

        }

        [Fact]
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

            MockFor<IRemoteController>().Received().SendMessage(theMessage);

            // *do* auto-save
            MockFor<IPersistenceController>().Received().SaveSpecification("foo", theSpecSentFromTheClient);

        }
    }
}