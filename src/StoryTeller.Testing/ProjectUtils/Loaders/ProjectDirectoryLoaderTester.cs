using FubuCore;
using NUnit.Framework;
using StoryTeller.CommandLine;
using StoryTeller.ProjectUtils;
using StoryTeller.ProjectUtils.Loaders;

namespace StoryTeller.Testing.ProjectUtils.Loaders
{
    public class ProjectDirectoryLoaderTester
    {
        [Test]
        public void load_a_project_from_a_project_directory()
        {
            var dir = ".".ToFullPath()
                .ParentDirectory().ParentDirectory()
                .ParentDirectory()
                .AppendPath("Storyteller.Gallery");
            var input = new RunInput {Path = dir};

            var loader = new ProjectDirectoryLoader(new FubuCore.FileSystem()).Load(input.Path);

            loader.ShouldNotBeNull();
            loader.ProjectFolder.ShouldEqual(dir);
            loader.Name.ShouldEqual("Storyteller.Gallery");
        }
    }
}