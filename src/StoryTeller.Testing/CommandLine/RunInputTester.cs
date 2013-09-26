using FubuCore;
using NUnit.Framework;
using StoryTeller.CommandLine;
using StoryTeller.Workspace;

namespace StoryTeller.Testing.CommandLine
{
    [TestFixture]
    public class RunInputTester
    {
        [Test]
        public void load_a_project_from_the_project_file_if_it_is_found()
        {
            var project = new Project {Name = "MyProject"};
            project.Save("myproject.xml");

            var input = new RunInput {Path = "myproject.xml"};

            input.LoadProject()
                .Name.ShouldEqual("MyProject");
        }

        [Test]
        public void load_a_project_from_a_project_directory()
        {
            var dir = ".".ToFullPath()
                .ParentDirectory().ParentDirectory()
                .ParentDirectory()
                .AppendPath("Storyteller.Gallery");
            var input = new RunInput {Path = dir};

            var project = input.LoadProject();

            project.ShouldNotBeNull();
            project.ProjectFolder.ShouldEqual(dir);
            project.Name.ShouldEqual("Storyteller.Gallery");
        }

        [Test]
        public void does_not_override_the_profile_if_none_is_specified()
        {
            var project = new Project { Name = "MyProject", Profile = "Regular" };
            project.Save("myproject.xml");

            var input = new RunInput { Path = "myproject.xml"};

            input.LoadProject().Profile.ShouldEqual("Regular");
        }

        [Test]
        public void respects_the_profile_flag()
        {
            var project = new Project { Name = "MyProject", Profile = "Regular"};
            project.Save("myproject.xml");

            var input = new RunInput { Path = "myproject.xml", ProfileFlag = "Phantom"};

            input.LoadProject().Profile.ShouldEqual("Phantom");
        }


        [Test]
        public void does_not_override_the_compile_target_if_none_is_specified()
        {
            var project = new Project { Name = "MyProject", CompileTarget = "retail" };
            project.Save("myproject.xml");

            var input = new RunInput { Path = "myproject.xml" };

            input.LoadProject().CompileTarget.ShouldEqual("retail");
        }

        [Test]
        public void respects_the_compile_target_flag()
        {
            var project = new Project { Name = "MyProject", CompileTarget = "debug" };
            project.Save("myproject.xml");

            var input = new RunInput { Path = "myproject.xml", CompileFlag = "release" };

            input.LoadProject().CompileTarget.ShouldEqual("release");
        }

    }
}