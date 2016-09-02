using System;
using System.IO;
using Baseline;
using Oakton;
using StoryTeller;
using ST.Client;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;

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

        [Description("Optional. Override the spec directory")]
        [FlagAlias("specs", 's')]
        public string SpecsFlag { get; set; }

        [Description("Sets a minimum number of retry attempts for this execution")]
        public int RetriesFlag { get; set; }

        public string SpecPath
        {
            get
            {
                if (SpecsFlag.IsNotEmpty())
                    return SpecsFlag.ToFullPath();

                return HierarchyLoader.SelectSpecPath(Path.ToFullPath());
            }
        }

        [Description("Force Storyteller to use this culture in all value conversions")]
        public string CultureFlag { get; set; }

        [Description("Optional. Explicitly specify web socket address to use when starting server. Defaults to 127.0.0.1")]
        public string WebSocketAddressFlag { get; set; }

        [Description("Optional. Tell Storyteller which which ISystem to use")]
        public string SystemNameFlag { get; set; }

        protected bool _disableAppDomainFileWatching = false;

        public RemoteController BuildRemoteController()
        {
            var path = Path.ToFullPath();
            var project = Project.LoadForFolder(path);

            if (BuildFlag.IsNotEmpty())
            {
                project.BuildProfile = BuildFlag;
            }

            if (ConfigFlag.IsNotEmpty())
            {
                project.ConfigFile = ConfigFlag;
            }


            // This will change later w/ the new separate process lifecycle
            var controller = new RemoteController(project, new AppDomainSystemLifecycle(project));
            controller.Project.Culture = CultureFlag;
			controller.DisableAppDomainFileWatching = _disableAppDomainFileWatching;




            if (TimeoutFlag.HasValue)
            {
                controller.Project.StopConditions.TimeoutInSeconds = TimeoutFlag.Value;
            }

            if (TeamCityTracingFlag)
            {
                controller.Project.TracingStyle = "TeamCity";
            }

            if (WebSocketAddressFlag.IsNotEmpty())
            {
                controller.WebSocketAddress = WebSocketAddressFlag;
            }

            if (SystemNameFlag.IsNotEmpty())
            {
                controller.Project.SystemTypeName = SystemNameFlag;
            }

            controller.Project.MaxRetries = RetriesFlag;
            controller.Project.Profile = ProfileFlag;



            return controller;
        }

        public void CreateMissingSpecFolder()
        {
            if (!Directory.Exists(SpecPath))
            {
                Console.WriteLine("Creating specifications directory at " + SpecPath);
                Directory.CreateDirectory(SpecPath);
            }
        }

        

    }
}