using System;
using System.ComponentModel;
using System.Threading.Tasks;
using Storyteller.Core.Engine;
using Storyteller.Core.Remotes;
using Storyteller.Core.Remotes.Messaging;

namespace Storyteller.Core.CommandLine
{
    public class RunInput : ProjectInput
    {
        [Description("Path to write out the results")]
        public string ResultsPath { get; set; }

        [Description("Optional.  Runs only one workspace")]
        public string WorkspaceFlag { get; set; }

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