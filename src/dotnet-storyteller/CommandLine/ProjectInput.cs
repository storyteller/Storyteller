using System;
using System.IO;
using Baseline;
using Oakton;
using StoryTeller;
using StoryTeller.Model.Persistence;
using StoryTeller.Model.Persistence.DSL;
using StoryTeller.Remotes;

namespace ST.Client
{
    [Obsolete("This will be removed in favor of StorytellerInput")]
    public class ProjectInput
    {

        public ProjectInput()
        {

#if NET46
            Path = Environment.CurrentDirectory;
#else
            Path = Directory.GetCurrentDirectory();
#endif
        }

        [Description("Path to the StoryTeller project file or the project directory")]
        public string Path { get; set; }

        [Description("Override the dotnet framework if multi-targeting")]
        public string FrameworkFlag { get; set; }

        [Description("Storyteller test mode profile for systems like Serenity that use this")]
        public string ProfileFlag { get; set; }

        [Description("Optional. Default project timeout in seconds.")]
        public int? TimeoutFlag { get; set; }

        [Description("Optional. Override the spec directory")]
        [FlagAlias("specs", 's')]
        public string SpecsFlag { get; set; }



        [Description("Optional. Override the fixtures directory")]
        [FlagAlias("fixtures", 'f')]
        public string FixturesFlag { get; set; }

        public string FixturePath
        {
            get
            {
                if (FixturesFlag.IsNotEmpty())
                {
                    return FixturesFlag.ToFullPath();
                }

                return FixtureLoader.SelectFixturePath(Path.ToFullPath());
            }
        }

        public string SpecPath
        {
            get
            {
                if (SpecsFlag.IsNotEmpty())
                {
                    return SpecsFlag.ToFullPath();
                }

                return HierarchyLoader.SelectSpecPath(Path.ToFullPath());
            }
        }



        [Description("Force Storyteller to use this culture in all value conversions")]
        public string CultureFlag { get; set; }


        public ST.Client.EngineController BuildEngine()
        {
            var project = configureProject();

            return new ST.Client.EngineController(project, new ProcessRunnerSystemLauncher(project));
        }

        protected virtual Project configureProject()
        {
            var path = Path.ToFullPath();
            var project = new Project();

            project.Framework = FrameworkFlag;

            project.Culture = CultureFlag;


            if (TimeoutFlag.HasValue)
            {
                project.StopConditions.TimeoutInSeconds = TimeoutFlag.Value;
            }

            project.Profile = ProfileFlag;

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
