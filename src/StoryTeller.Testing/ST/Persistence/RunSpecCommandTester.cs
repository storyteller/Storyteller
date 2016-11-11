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
    
    public class RunSpecCommandTester
    {
        private readonly MockedApplication app = new MockedApplication();

        [Fact]
        public void run_spec_by_id_only()
        {
            var theSpecRetrievedFromPersistence = new Specification();

            app.Persistence.LoadSpecification("foo")
                .Returns(new SpecData
                {
                    data = theSpecRetrievedFromPersistence
                });

            var theMessage = new RunSpec{id = "foo"};
            new RunSpecCommand().HandleMessage(theMessage, app);

            app.Engine.Received().SendMessage(theMessage);

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

            new RunSpecCommand().HandleMessage(theMessage, app);

            app.Engine.Received().SendMessage(theMessage);

            // do not auto-save
            app.Persistence.DidNotReceive().SaveSpecification("foo", theSpecSentFromTheClient);

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

            new RunSpecCommand().HandleMessage(theMessage, app);

            app.Engine.Received().SendMessage(theMessage);

            // *do* auto-save
            app.Persistence.Received().SaveSpecification("foo", theSpecSentFromTheClient);

        }
    }
}