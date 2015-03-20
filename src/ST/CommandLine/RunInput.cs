using System.ComponentModel;
using System.Threading.Tasks;
using StoryTeller.Engine;
using StoryTeller.Remotes;

namespace ST.CommandLine
{
    public class RunInput : ProjectInput
    {
        public RunInput()
        {
            ResultsPathFlag = "stresults.htm";
        }

        [Description("Path to write out the results. Default is stresults.htm")]
        public string ResultsPathFlag { get; set; }

        [Description("Optional.  Runs only one workspace")]
        public string WorkspaceFlag { get; set; }

        [Description("Open the results in a browser after the run. DO NOT DO THIS IN CI!")]
        public bool OpenFlag { get; set; }

        [Description("Write the performance data in CSV format to the specified path")]
        public string CsvFlag { get; set; }

        [Description("Write the raw result information to JSON format at the specified path")]
        public string JsonFlag { get; set; }

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