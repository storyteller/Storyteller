using System.Collections.Generic;
using System.Linq;
using FubuCore.Logging;
using NUnit.Framework;
using Rhino.Mocks;
using Shouldly;
using ST.Client;
using StoryTeller.Commands;
using StoryTeller.Messages;
using StoryTeller.Remotes;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Testing.ST
{
    [TestFixture]
    public class ClientConnectorTester
    {
        private RecordingCommand<RunSpec> theCommand;
        private IRemoteController theRemoteController;
        private ClientConnector theConnector;

        [SetUp]
        public void SetUp()
        {
            theCommand = new RecordingCommand<RunSpec>();
            theRemoteController = MockRepository.GenerateMock<IRemoteController>();

            theConnector = new ClientConnector(theRemoteController, new ICommand[] {theCommand});
        }

        [Test]
        public void calls_to_the_handler_if_one_matches_the_json()
        {
            var message = new RunSpec {id = "foo"};
            var json = JsonSerialization.ToCleanJson(message);

            theConnector.HandleJson(json);

            theCommand.Received.Single()
                .id.ShouldBe("foo");

            theRemoteController.AssertWasNotCalled(x => x.SendJsonMessage(json));
        }

        [Test]
        public void delegates_to_the_remote_controller_if_no_matching_handler()
        {
            var json = "{foo: 1}";

            theConnector.HandleJson(json);

            theRemoteController.AssertWasCalled(x => x.SendJsonMessage(json));
        }
    }

    public class RecordingCommand<T> : Command<T> where T : ClientMessage
    {
        public readonly IList<T> Received = new List<T>();

        public override void HandleMessage(T message)
        {
            Received.Add(message);
        }
    }
}