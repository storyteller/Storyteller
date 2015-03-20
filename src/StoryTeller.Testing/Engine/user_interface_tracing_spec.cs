using System.Collections.Generic;
using System.Linq;
using FubuCore;
using Newtonsoft.Json.Linq;
using NUnit.Framework;
using Shouldly;
using StoryTeller.Messages;
using StoryTeller.Remotes;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class user_interface_tracing_spec
    {
        private PassthroughListener theListener;
        private SpecExecutionCompleted theResults;

        private RemoteController controllerForProject(string projectFolder)
        {
            var path = ".".ToFullPath().ParentDirectory().ParentDirectory().ParentDirectory()
                .AppendPath(projectFolder);

            return new RemoteController(path);
        }

        [TestFixtureSetUp]
        public void SetUp()
        {
            var controller = controllerForProject("Storyteller.Samples");
            theListener = new PassthroughListener();
            

            var task = controller.Start(EngineMode.Interactive).ContinueWith(t =>
            {
                controller.Messaging.AddListener(theListener);
                return controller.Send(new RunSpec {id = "embeds"}).AndWaitFor<SpecExecutionCompleted>();
            });

            task.Wait();
            task.Result.Wait(1.Seconds());

            theResults = task.Result.Result;

            

            controller.Messaging.RemoveListener(theListener);


        }

        [Test]
        public void should_have_captured_debugging_information()
        {
            var expectedText = "EmbeddedFixture.Setup sent this debug message";

            ShouldBeTestExtensions.ShouldBe(theResults.Results.Reporting.Any(x => x.html.Contains(expectedText)), true);
        }

        [Test]
        public void should_have_broadcast_a_spec_queued_message()
        {
            theListener.MessageTypesReceived[0].ShouldBe("spec-queued");
        }

        [Test]
        public void spec_has_15_steps_so_15_progress_messages()
        {
            theListener.MessageTypesReceived.Where(x => x == "spec-progress")
                .Count().ShouldBe(15);
        }

        [Test]
        public void should_have_broadcast_a_spec_running_message()
        {
            theListener.MessageTypesReceived[1].ShouldBe("spec-running");
        }

        [Test]
        public void should_have_broadcast_the_spec_completion_message()
        {
            theListener.MessageTypesReceived.Last().ShouldBe("spec-execution-completed");
        }

        [Test]
        public void should_have_broadcast_intermediate_results()
        {
            ShouldBeTestExtensions.ShouldBe(theListener.MessageTypesReceived.Any(x => x == "step-result"), true);
        }
    }

    public class PassthroughListener : IListener<PassthroughMessage>
    {
        public readonly IList<string> MessageTypesReceived = new List<string>();

        public void Receive(PassthroughMessage message)
        {
            var token = JToken.Parse(message.json);

            MessageTypesReceived.Add(token.Value<string>("type"));
        }
    }
}