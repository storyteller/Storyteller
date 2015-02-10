using System.ComponentModel;
using StoryTeller.Domain;
using StoryTeller.ProjectUtils;
using StoryTeller.Workspace;

namespace StoryTeller.CommandLine
{
    public class ProjectInput
    {
        public ProjectInput()
        {
            LifecycleFlag = Lifecycle.Any;
        }

        [Description("Path to the StoryTeller project file or the project directory")]
        public string Path { get; set; }

        [Description("Specify a compile target")]
        public string CompileFlag { get; set; }

        [Description("Storyteller test mode profile for systems like Serenity that use this")]
        public string ProfileFlag { get; set; }

        [Description("Optional. Default project timeout in seconds.")]
        public int? TimeoutFlag { get; set; }

        [Description("Optional. Only runs tests with desired lifecyle")]
        public Lifecycle LifecycleFlag { get; set; }

        public IProject LoadProject()
        {
            IProject project = ProjectLoader.Load(Path, CompileFlag, ProfileFlag);
            if (TimeoutFlag != null) project.TimeoutInSeconds = TimeoutFlag.Value;

            return project;
        }
    }
}