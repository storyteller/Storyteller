using System;
using System.IO;
using Baseline;
using Oakton;
using StoryTeller;
using ST.Client;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Model.Persistence.DSL;
using StoryTeller.Remotes;

namespace ST.CommandLine
{
    public class ProjectInput
    {
        private readonly EngineMode _mode;

        public ProjectInput(EngineMode mode)
        {
            _mode = mode;
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

        [Description("Optional. Override the fixtures directory")]
        [FlagAlias("fixtures", 'f')]
        public string FixturesFlag { get; set; }


        public string SpecPath
        {
            get
            {
                if (SpecsFlag.IsNotEmpty())
                    return SpecsFlag.ToFullPath();

                return HierarchyLoader.SelectSpecPath(Path.ToFullPath());
            }
        }

        public string FixturePath
        {
            get
            {
                if (FixturesFlag.IsNotEmpty())
                    return FixturesFlag.ToFullPath();

                return FixtureLoader.SelectFixturePath(Path.ToFullPath());
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
            var project = configureProject();

            // This will change later w/ the new separate process lifecycle
#if NET46

            // TODO -- this will have to change later
            var file = project.ProjectPath.AppendPath("project.json");


            var launcher = File.Exists(file) ? (ISystemLauncher) new ProcessRunnerSystemLauncher(project) : new AppDomainSystemLauncher(project);
            var controller = new RemoteController(project, launcher);
#else
            var controller = new RemoteController(project, new ProcessRunnerSystemLauncher(project));

#endif
            controller.DisableAppDomainFileWatching = _disableAppDomainFileWatching;

            return controller;
        }

        private Project configureProject()
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

            project.Culture = CultureFlag;


            if (TimeoutFlag.HasValue)
            {
                project.StopConditions.TimeoutInSeconds = TimeoutFlag.Value;
            }

            if (TeamCityTracingFlag)
            {
                project.TracingStyle = "TeamCity";
            }

            if (SystemNameFlag.IsNotEmpty())
            {
                project.SystemTypeName = SystemNameFlag;
            }

            project.MaxRetries = RetriesFlag;
            project.Profile = ProfileFlag;

            project.Mode = _mode;

            return project;
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
