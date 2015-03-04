using System.ComponentModel;
using FubuCore;
using Storyteller.Core.Model;
using Storyteller.Core.Remotes;

namespace ST.CommandLine
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

        public RemoteController BuildRemoteController()
        {
            var path = Path.ToFullPath();

            var controller = new RemoteController(path);
            if (CompileFlag.IsNotEmpty())
            {
                controller.UseBuildProfile(CompileFlag);
            }

            if (TimeoutFlag.HasValue)
            {
                controller.Project.StopConditions.TimeoutInSeconds = TimeoutFlag.Value;
            }

            return controller;
        }

    }
}