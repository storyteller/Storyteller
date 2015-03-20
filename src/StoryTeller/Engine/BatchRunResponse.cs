using System.Linq;
using StoryTeller.Messages;
using StoryTeller.Model;

namespace StoryTeller.Engine
{
    public class BatchRunResponse : ClientMessage
    {
        public BatchRunResponse() : base("batch-run-response")
        {
        }

        public BatchRecord[] records;
        public FixtureModel[] fixtures;

        public string time;
        public string system;
        public string suite;

        public bool success;

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