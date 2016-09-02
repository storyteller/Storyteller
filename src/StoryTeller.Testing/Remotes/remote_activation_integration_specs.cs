using System.Threading;
using Baseline;
using MultipleSystems;
using Xunit;
using Shouldly;
using ST.Client;
using StoryTeller.Engine;
using StoryTeller.Remotes;
using StoryTeller.Samples;

namespace StoryTeller.Testing.Remotes
{
    
    public class remote_activation_integration_specs
    {
        private RemoteController controllerForProject(string projectFolder)
        {
            var path = TestingContext.FindParallelDirectory(projectFolder);

            return new RemoteController(Project.LoadForFolder(path));
        }

        [Fact]
        public void load_directory_where_matching_assembly_only_has_one_system()
        {
            using (var controller = controllerForProject("Storyteller.Samples"))
            {
                var task = controller.Start(EngineMode.Batch);
                task.Wait(5.Seconds());

                var message = task.Result;

                message.error.ShouldBeNull();
                message.success.ShouldBe(true);
                message.system_name.ShouldBe(typeof (GrammarSystem).FullName);
            }
        }

        [Fact]
        public void load_directory_with_no_system_should_just_use_the_nullo_system()
        {
            using (var controller = controllerForProject("Storyteller.Gallery"))
            {
                var task = controller.Start(EngineMode.Batch);
                task.Wait(5.Seconds());

                var message = task.Result;

                message.error.ShouldBeNull();
                message.success.ShouldBe(true);
                message.system_name.ShouldBe(typeof(NulloSystem).FullName);
            }
        }

        [Fact]
        public void get_a_graceful_message_when_system_blows_up()
        {
            using (var controller = controllerForProject("BadSystem"))
            {
                var task = controller.Start(EngineMode.Batch);
                task.Wait(5.Seconds());

                var message = task.Result;

                message.error.ShouldContain("DivideByZero");
                message.success.ShouldBe(false);
                message.system_name.ShouldBe(typeof(BadSystem.BadSystem).FullName);
            }
        }

        // "Not reliable in a tight loop because of the file system write")
        public void get_a_graceful_messages_with_too_many_systems()
        {
            using (var controller = controllerForProject("MultipleSystems"))
            {
                new FileSystem().DeleteFile(controller.Project.ProjectPath.AppendPath(Project.FILE));
                Thread.Sleep(100);

                var task = controller.Start(EngineMode.Batch);
                task.Wait(5.Seconds());

                var message = task.Result;

                message.error.ShouldContain("Cannot determine the Storyteller ISystem to use");
                message.error.ShouldContain(typeof(System1).AssemblyQualifiedName);
                message.error.ShouldContain(typeof(System2).AssemblyQualifiedName);
                message.error.ShouldContain(typeof(System3).AssemblyQualifiedName);
                message.success.ShouldBe(false);
            }
        }

        // Not reliable in a tight loop because of the file system write"
        public void can_use_config_to_specify_the_system_name_as_assembly_qualified_name()
        {
            using (var controller = controllerForProject("MultipleSystems"))
            {
                var project = new Project
                {
                    SystemTypeName = typeof (System2).AssemblyQualifiedName
                };

                new FileSystem().WriteObjectToFile(controller.Project.ProjectPath.AppendPath(Project.FILE), project);
                Thread.Sleep(100);

                var task = controller.Start(EngineMode.Batch);
                task.Wait(5.Seconds());

                var message = task.Result;

                message.success.ShouldBe(true);
                message.system_name.ShouldBe(typeof (System2).FullName);
                message.system_full_name.ShouldBe(typeof(System2).FullName);
            }
        }

        // Not reliable in a tight loop because of the file system write
        public void can_use_config_to_specify_the_system_name_as_class_name_only()
        {
            using (var controller = controllerForProject("MultipleSystems"))
            {
                var project = new Project
                {
                    SystemTypeName = typeof(System2).Name
                };

                new FileSystem().WriteObjectToFile(controller.Project.ProjectPath.AppendPath(Project.FILE), project);
                Thread.Sleep(100);

                var task = controller.Start(EngineMode.Batch);
                task.Wait(5.Seconds());

                var message = task.Result;

                message.success.ShouldBe(true);
                message.system_name.ShouldBe(typeof(System2).FullName);

            }
        }
    }
}