using FubuCore;
using NUnit.Framework;
using StoryTeller.CommandLine;
using StoryTeller.ProjectUtils;
using StoryTeller.ProjectUtils.Loaders;
using StoryTeller.Workspace;

namespace StoryTeller.Testing.ProjectUtils.Loaders
{
    public class ProjectFileLoaderTester
    {
         
        [Test]
        public void load_a_project_from_the_project_file_if_it_is_found()
        {
            var project = new Project
            {
                Name = "MyProject",
                Profile = "Regular",
                CompileTarget = "retail"
            };
            project.Save("myproject.xml");

            var input = new RunInput {Path = "myproject.xml"};

            var loader = new ProjectFileLoader(new FubuCore.FileSystem()).Load(input.Path);
            loader.Name.ShouldEqual("MyProject");
            loader.Profile.ShouldEqual("Regular");
            loader.CompileTarget.ShouldEqual("retail");
        }
    }
}