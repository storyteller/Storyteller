using NUnit.Framework;
using StoryTeller.CommandLine;
using StoryTeller.ProjectUtils;
using StoryTeller.Workspace;

namespace StoryTeller.Testing.ProjectUtils
{
    public class ProjectLoaderTester
    {
        [Test]
        public void respects_the_profile_flag()
        {
            var project = new Project { Name = "MyProject", Profile = "Regular"};
            project.Save("myproject.xml");

            ProjectLoader.Load("myproject.xml", null, "Phantom").Profile.ShouldEqual("Phantom");
        }

        [Test]
        public void respects_the_compile_target_flag()
        {
            var project = new Project { Name = "MyProject", CompileTarget = "debug" };
            project.Save("myproject.xml");

            ProjectLoader.Load("myproject.xml", "release", null).CompileTarget.ShouldEqual("release");
        }
    }
}