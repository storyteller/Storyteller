using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using FubuCore;
using FubuTestingSupport;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using NUnit.Framework;
using Storyteller.Core.Messages;
using Storyteller.Core.Model.Persistence;
using Storyteller.Core.Remotes;
using Storyteller.Core.Remotes.Messaging;

namespace Storyteller.Core.Testing.Engine
{
    [TestFixture]
    public class user_interface_tracing_spec
    {
        private PassthroughListener theListener;

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

            controller.Messaging.RemoveListener(theListener);


        }

        [Test]
        public void should_have_broadcast_a_spec_queued_message()
        {
            theListener.MessageTypesReceived[0].ShouldEqual("spec-queued");
        }

        [Test]
        public void spec_has_15_steps_so_15_progress_messages()
        {
            theListener.MessageTypesReceived.Where(x => x == "spec-progress")
                .Count().ShouldEqual(15);
        }

        [Test]
        public void should_have_broadcast_a_spec_running_message()
        {
            theListener.MessageTypesReceived[1].ShouldEqual("spec-running");
        }

        [Test]
        public void should_have_broadcast_the_spec_completion_message()
        {
            theListener.MessageTypesReceived.Last().ShouldEqual("spec-execution-completed");
        }

        [Test]
        public void should_have_broadcast_intermediate_results()
        {
            theListener.MessageTypesReceived.Any(x => x == "step-result").ShouldBeTrue();
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