using System.Linq;
using Storyteller.Core.Messages;
using Storyteller.Core.Model;

namespace Storyteller.Core.Engine
{
    public class BatchRunResponse : ClientMessage
    {
        public BatchRunResponse() : base("batch-run-response")
        {
        }

        public SpecResult[] results;


        public LifecycleSummary Summarize(Lifecycle lifecycle)
        {
            return new LifecycleSummary
            {
                Lifecycle = lifecycle,
                Successful = results.Where(x => x.node.lifecycle == lifecycle.ToString() && x.WasSuccessful()).Count(),
                Failed = results.Where(x => x.node.lifecycle == lifecycle.ToString() && !x.WasSuccessful()).Count()
            };
        }
    }
}