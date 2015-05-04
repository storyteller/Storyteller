using System.Collections.Generic;
using System.Diagnostics;
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
                return controller.Send(new RunSpec {id = "embeds", spec = TestingContext.FindSpecification("embeds")}).AndWaitFor<SpecExecutionCompleted>();
            });

            task.Wait();
            task.Result.Wait(1.Seconds());

            theResults = task.Result.Result;

            

            controller.Messaging.RemoveListener(theListener);


        }
        /*
        [Test, Explicit("Can only work in Debug builds")]
        public void should_have_captured_debugging_information()
        {
            var expectedText = "EmbeddedFixture.Setup sent this debug message";

            theResults.Results.Reporting.Each(x => Debug.WriteLine("html: " + x.html));

            theResults.Results.Reporting.Any(x => x.html.Contains(expectedText)).ShouldBe(true);
        }
         * */


        [Test]
        public void spec_has_15_steps_so_15_progress_messages()
        {
            theListener.MessageTypesReceived.Where(x => x == "spec-progress")
                .Count().ShouldBe(15);
        }


        [Test]
        public void should_have_broadcast_the_spec_completion_message()
        {
            theListener.MessageTypesReceived.Last().ShouldBe("spec-execution-completed");
        }

        [Test]
        public void should_have_broadcast_intermediate_results()
        {
            theListener.MessageTypesReceived.Any(x => x == "step-result").ShouldBe(true);
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