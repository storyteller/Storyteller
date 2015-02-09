using FubuCore;
using FubuTestingSupport;
using NUnit.Framework;
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
    }
}