using System;
using System.ComponentModel;
using System.IO;
using FubuCore;
using FubuCore.CommandLine;
using ST.Client;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Remotes;

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

        [Description("Specify a build target to force Storyteller to choose that profile. By default, ST will use 'Debug'")]
        public string BuildFlag { get; set; }

        [Description("Storyteller test mode profile for systems like Serenity that use this")]
        public string ProfileFlag { get; set; }

        [Description("Optional. Default project timeout in seconds.")]
        public int? TimeoutFlag { get; set; }

        [Description("Optional. Only runs tests with desired lifecyle")]
        public Lifecycle LifecycleFlag { get; set; }

        [Description("Optional. Applies extra logging to see progress within TeamCity during CI runs")]
        [FlagAlias("teamcity", 'z')]
        public bool TeamCityTracingFlag { get; set; }

        [Description("Optional. Override the config file selection of the Storyteller test running AppDomain")]
        public string ConfigFlag { get; set; }

        [Description("Sets a minimum number of retry attempts for this execution")]
        public int RetriesFlag { get; set; }

        public RemoteController BuildRemoteController()
        {
            var path = Path.ToFullPath();

            var controller = new RemoteController(path);
            if (BuildFlag.IsNotEmpty())
            {
                controller.UseBuildProfile(BuildFlag);
            }

            if (TimeoutFlag.HasValue)
            {
                controller.Project.StopConditions.TimeoutInSeconds = TimeoutFlag.Value;
            }

            if (TeamCityTracingFlag)
            {
                controller.Project.TracingStyle = "TeamCity";
            }

            controller.Project.MaxRetries = RetriesFlag;
            controller.Project.Profile = ProfileFlag;

            if (ConfigFlag.IsNotEmpty())
            {
                controller.ConfigFile = ConfigFlag;
            }

            return controller;
        }

        public void CreateMissingSpecFolder()
        {
            var specFolder = HierarchyLoader.SelectSpecPath(Path.ToFullPath());
            if (!Directory.Exists(specFolder))
            {
                Console.WriteLine("Creating /Specs folder at " + specFolder);
                Directory.CreateDirectory(specFolder);
            }
        }

    }
}