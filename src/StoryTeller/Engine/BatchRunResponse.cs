using System.IO;
using System.Linq;
using Newtonsoft.Json;
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

        [JsonProperty("success")]
        public bool Success
        {
            get
            {
                if (records == null) return false;

                return !records.Any(x => x.header.lifecycle == Lifecycle.Regression.ToString() && !x.WasSuccessful());
            }
        }

        public override string ToString()
        {
            var writer = new StringWriter();

            var regression = Summarize(Lifecycle.Regression);
            var acceptance = Summarize(Lifecycle.Acceptance);

            writer.WriteLine(acceptance);
            writer.WriteLine(regression);

            return writer.ToString();
        }

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