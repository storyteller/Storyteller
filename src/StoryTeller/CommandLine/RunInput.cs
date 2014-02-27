using System.ComponentModel;
using FubuCore;
using FubuCore.CommandLine;
using StoryTeller.Domain;
using StoryTeller.Workspace;
using FileSystem = FubuCore.FileSystem;

namespace StoryTeller.CommandLine
{
    public class RunInput 
    {
        [Description("Path to the StoryTeller project file or the project directory")]
        public string Path { get; set; }

        [Description("Path to write out the results")]
        public string ResultsPath { get; set; }

        [Description("Optional.  Runs only one workspace")]
        public string WorkspaceFlag { get; set; }

        [Description("Specify a compile target")]
        public string CompileFlag { get; set; }

        [Description("Storyteller test mode profile for systems like Serenity that use this")]
        public string ProfileFlag { get; set; }

        [Description("Optional. Default project timeout in seconds.")]
        public int? TimeoutFlag { get; set; }

        [Description("Optional. Only runs tests with desired lifecyle")]
        public Lifecycle LifecycleFlag { get; set; }

        [Description("Optional. Will not retry tests more than max retry limit.")]
        public int? MaxRetryFlag { get; set; }

        public RunInput()
        {
            LifecycleFlag = Lifecycle.Any;
        }
    }
}