using System;
using System.ComponentModel;
using System.Threading.Tasks;
using FubuCore;
using Storyteller.Core.Engine;
using Storyteller.Core.Model;
using Storyteller.Core.Remotes;
using Storyteller.Core.Remotes.Messaging;

namespace Storyteller.Core.CommandLine
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

        public RunInput()
        {
            LifecycleFlag = Lifecycle.Any;
        }

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

        // TODO -- test this!
        public Task<BatchRunResponse> StartBatch(RemoteController controller)
        {
            var request = new BatchRunRequest
            {
                Lifecycle = LifecycleFlag,
                Suite = WorkspaceFlag
            };

            return controller.Send(request).AndWaitFor<BatchRunResponse>();
        }
    }
}