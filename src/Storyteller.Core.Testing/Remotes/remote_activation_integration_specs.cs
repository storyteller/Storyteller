using FubuCore;
using FubuTestingSupport;
using NUnit.Framework;
using Storyteller.Core.Engine;
using Storyteller.Core.Remotes;
using StoryTeller.Samples;

namespace Storyteller.Core.Testing.Remotes
{
    [TestFixture]
    public class remote_activation_integration_specs
    {
        private RemoteController controllerForProject(string projectFolder)
        {
            var path = ".".ToFullPath().ParentDirectory().ParentDirectory().ParentDirectory()
                .AppendPath(projectFolder);

            return new RemoteController(path);
        }

        [Test]
        public void load_directory_where_matching_assembly_only_has_one_system()
        {
            using (var controller = controllerForProject("Storyteller.Samples"))
            {
                var task = controller.Start(EngineMode.Batch);
                task.Wait(3.Seconds());

                var message = task.Result;

                message.error.ShouldBeNull();
                message.success.ShouldBeTrue();
                message.system_name.ShouldEqual(typeof (GrammarSystem).FullName);
            }
        }

        [Test]
        public void load_directory_with_no_system_should_just_use_the_nullo_system()
        {
            using (var controller = controllerForProject("Storyteller.Gallery"))
            {
                var task = controller.Start(EngineMode.Batch);
                task.Wait(3.Seconds());

                var message = task.Result;

                message.error.ShouldBeNull();
                message.success.ShouldBeTrue();
                message.system_name.ShouldEqual(typeof(NulloSystem).FullName);
            }
        }

        [Test]
        public void get_a_graceful_message_when_system_blows_up()
        {
            using (var controller = controllerForProject("BadSystem"))
            {
                var task = controller.Start(EngineMode.Batch);
                task.Wait(3.Seconds());

                var message = task.Result;

                message.error.ShouldContain("DivideByZero");
                message.success.ShouldBeFalse();
                message.system_name.ShouldEqual(typeof(BadSystem.BadSystem).FullName);
            }
        }
    }
}