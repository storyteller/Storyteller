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

        public BatchRecord[] records;
        public FixtureModel[] fixtures;

        public LifecycleSummary Summarize(Lifecycle lifecycle)
        {
            return new LifecycleSummary
            {
                Lifecycle = lifecycle,
                Successful = records.Where(x => x.header.lifecycle == lifecycle.ToString() && x.WasSuccessful()).Count(),
                Failed = records.Where(x => x.header.lifecycle == lifecycle.ToString() && !x.WasSuccessful()).Count()
            };
        }
    }
}