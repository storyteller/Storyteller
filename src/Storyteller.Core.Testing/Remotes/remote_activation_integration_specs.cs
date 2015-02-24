using System.IO;
using System.Threading;
using FubuCore;
using FubuTestingSupport;
using MultipleSystems;
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
            using (var controller = controllerForProject("StoryTeller.Samples"))
            {
                var task = controller.Start(EngineMode.Batch);
                task.Wait(5.Seconds());

                var message = task.Result;

                message.error.ShouldBeNull();
                message.success.ShouldBeTrue();
                message.system_name.ShouldEqual(typeof (GrammarSystem).FullName);
            }
        }

        [Test]
        public void load_directory_with_no_system_should_just_use_the_nullo_system()
        {
            using (var controller = controllerForProject("StoryTeller.Gallery"))
            {
                var task = controller.Start(EngineMode.Batch);
                task.Wait(5.Seconds());

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
                task.Wait(5.Seconds());

                var message = task.Result;

                message.error.ShouldContain("DivideByZero");
                message.success.ShouldBeFalse();
                message.system_name.ShouldEqual(typeof(BadSystem.BadSystem).FullName);
            }
        }

        [Test, Explicit("Not reliable in a tight loop because of the file system write")]
        public void get_a_graceful_messages_with_too_many_systems()
        {
            using (var controller = controllerForProject("MultipleSystems"))
            {
                new FileSystem().DeleteFile(controller.Path.AppendPath(Project.FILE));
                Thread.Sleep(100);

                var task = controller.Start(EngineMode.Batch);
                task.Wait(5.Seconds());

                var message = task.Result;

                message.error.ShouldContain("Cannot determine the Storyteller ISystem to use");
                message.error.ShouldContain(typeof(System1).AssemblyQualifiedName);
                message.error.ShouldContain(typeof(System2).AssemblyQualifiedName);
                message.error.ShouldContain(typeof(System3).AssemblyQualifiedName);
                message.success.ShouldBeFalse();
            }
        }

        [Test, Explicit("Not reliable in a tight loop because of the file system write")]
        public void can_use_config_to_specify_the_system_name_as_assembly_qualified_name()
        {
            using (var controller = controllerForProject("MultipleSystems"))
            {
                var project = new Project
                {
                    SystemTypeName = typeof (System2).AssemblyQualifiedName
                };

                new FileSystem().WriteObjectToFile(controller.Path.AppendPath(Project.FILE), project);
                Thread.Sleep(100);

                var task = controller.Start(EngineMode.Batch);
                task.Wait(5.Seconds());

                var message = task.Result;

                message.success.ShouldBeTrue();
                message.system_name.ShouldEqual(typeof (System2).FullName);
                
            }
        }

        [Test, Explicit("Not reliable in a tight loop because of the file system write")]
        public void can_use_config_to_specify_the_system_name_as_class_name_only()
        {
            using (var controller = controllerForProject("MultipleSystems"))
            {
                var project = new Project
                {
                    SystemTypeName = typeof(System2).Name
                };

                new FileSystem().WriteObjectToFile(controller.Path.AppendPath(Project.FILE), project);
                Thread.Sleep(100);

                var task = controller.Start(EngineMode.Batch);
                task.Wait(5.Seconds());

                var message = task.Result;

                message.success.ShouldBeTrue();
                message.system_name.ShouldEqual(typeof(System2).FullName);

            }
        }
    }
}