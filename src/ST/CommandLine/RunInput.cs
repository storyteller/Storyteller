using System;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using FubuCore.CommandLine;
using ST.Client;
using StoryTeller.Engine;
using StoryTeller.Remotes;

namespace ST.CommandLine
{
    public class RunInput : ProjectInput
    {
        public RunInput()
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

        [Description("Write the performance data in CSV format to the specified path")]
        public string CsvFlag { get; set; }

        [Description("Write the raw result information to JSON format at the specified path")]
        public string JsonFlag { get; set; }

        [Description("Dump the raw JSON history of the batch run to the specified path")]
        public string DumpFlag { get; set; }

        private BatchRunRequest _batchRunRequest;

        public BatchRunRequest GetBatchRunRequest()
        {
            var tags = ExcludeTagsFlag ?? "";
            return _batchRunRequest ?? (_batchRunRequest = new BatchRunRequest
            {
                Lifecycle = LifecycleFlag,
                SpecPath = SpecPath,
                Suite = WorkspaceFlag,
                Tags = tags.Split(new[] { "," }, StringSplitOptions.RemoveEmptyEntries).Select(x => x.Trim()).ToArray()
            });
        }

        public Task<BatchRunResponse> StartBatch(IRemoteController controller)
        {
            var request = GetBatchRunRequest();
            return controller.Send(request).AndWaitFor<BatchRunResponse>();
        }
    }
}
