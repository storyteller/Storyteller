using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Razor.Runtime.TagHelpers;
using NSubstitute;
using Shouldly;
using StoryTeller.Messages;
using StoryTeller.Remotes.Messaging;
using ST;
using ST.Client;
using Xunit;

namespace StoryTeller.Testing.ST
{
    public class CommandRunnerTester
    {
        private RecordingCommand<RunSpec> theCommand;
        private IRemoteController theRemoteController;
        private CommandRunner theRunner;

        public CommandRunnerTester()
        {
            theCommand = new RecordingCommand<RunSpec>();

            var app = Substitute.For<IApplication>();
            theRemoteController = Substitute.For<IRemoteController>();

            app.Remote.Returns(theRemoteController);

            theRunner = new CommandRunner(app, new ICommand[] {theCommand});
        }

        [Fact]
        public void calls_to_the_handler_if_one_matches_the_json()
        {
            var message = new RunSpec { id = "foo" };
            var json = JsonSerialization.ToCleanJson(message);

            theRunner.HandleJson(json);

            theCommand.Received.Single()
                .id.ShouldBe("foo");

            theRemoteController.DidNotReceive().SendJsonMessage(json);
        }

        [Fact]
        public void delegates_to_the_remote_controller_if_no_matching_handler()
        {
            var json = "{foo: 1}";

            theRunner.HandleJson(json);

            theRemoteController.Received().SendJsonMessage(json);
        }
    }


    public class RecordingCommand<T> : Command<T> where T : ClientMessage
    {
        public readonly IList<T> Received = new List<T>();

        public override void HandleMessage(T message, IApplication app)
        {
            Received.Add(message);
        }
    }
}