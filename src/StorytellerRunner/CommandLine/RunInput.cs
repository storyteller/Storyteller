using System;
using System.Linq;
using System.Threading.Tasks;
using Oakton;
using StoryTeller;
using ST.Client;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Remotes;

namespace ST.CommandLine
{
    public class RunInput : ProjectInput
    {
        public RunInput() : base(EngineMode.Batch)
        {
            ResultsPathFlag = "stresults.htm";
            _disableAppDomainFileWatching = true;
        }

        [Description("Path to write out the results. Default is stresults.htm")]
        public string ResultsPathFlag { get; set; }

        [Description("Optional.  Runs only one workspace")]
        public string WorkspaceFlag { get; set; }

        [Description("Optional. Excludes specs with any of the specified tags (comma-delimited)")]
        [FlagAlias("exclude-tags", 'e')]
        public string ExcludeTagsFlag { get; set; }

        [Description("Open the results in a browser after the run. DO NOT DO THIS IN CI!")]
        public bool OpenFlag { get; set; }

        [Description("WriteToText the performance data in CSV format to the specified path")]
        public string CsvFlag { get; set; }

        [Description("WriteToText the raw result information to JSON format at the specified path")]
        public string JsonFlag { get; set; }

        [Description("Dump the raw JSON history of the batch run to the specified path")]
        public string DumpFlag { get; set; }

        [Description("Only validates the specifications and writes out a list of the encountered errors. Will fail if there are any errors.")]
        [FlagAlias("validate")]
        public bool ValidateFlag { get; set; }

        [Description("Writes extra console logging for individual specs")]
        public bool VerboseFlag { get; set; }

        [Description("Sets a minimum number of retry attempts for this execution")]
        public int RetriesFlag { get; set; }

        [Description("Optional. Applies extra logging to see progress within TeamCity during CI runs")]
        [FlagAlias("teamcity", 'z')]
        public bool TeamCityTracingFlag { get; set; }

        [Description("Optional. Only runs tests with desired lifecyle")]
        public Lifecycle LifecycleFlag { get; set; } = Lifecycle.Any;

        [Description("Optional. Applies extra logging to see progress within AppVeyor during CI runs")]
        [FlagAlias("appveyor")]
        public bool AppVeyorTracingFlag { get; set; }
        protected override Project configureProject()
        {
            var project = base.configureProject();
            project.MaxRetries = RetriesFlag;

            if (TeamCityTracingFlag)
            {
                project.TracingStyle = "TeamCity";
            }

            if (AppVeyorTracingFlag)
            {
                project.TracingStyle = "AppVeyor";
            }

            return project;
        }

        private BatchRunRequest _batchRunRequest;

        public BatchRunRequest GetBatchRunRequest()
        {
            var tagsString = ExcludeTagsFlag ?? "";
            var top = HierarchyLoader.ReadHierarchy(SpecPath);
            var tags = tagsString.Split(new[] { "," }, StringSplitOptions.RemoveEmptyEntries).Select(x => x.Trim()).ToArray();
            var specs = HierarchyLoader.Filter(top, LifecycleFlag, WorkspaceFlag, tags).ToList();
            return new BatchRunRequest(specs);
        }

        public Task<BatchRunResponse> StartBatch(IEngineController controller)
        {
            var request = GetBatchRunRequest();
            return controller.Send(request).AndWaitFor<BatchRunResponse>();
        }
    }
}
