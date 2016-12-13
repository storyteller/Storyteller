using System;
using Newtonsoft.Json;
using StoryTeller.Engine;
using StoryTeller.Results;

namespace StoryTeller
{
    public class SpecResults
    {
        [JsonProperty("counts")]
        public Counts Counts { get; set; }

        [JsonIgnore] public bool HadCriticalException;

        [JsonProperty("results")] public IResultMessage[] Results = new IResultMessage[0];

        [JsonProperty("performance")] public PerfRecord[] Performance = new PerfRecord[0];

        [JsonProperty("duration")] public long Duration = 0;

        [JsonProperty("logging")] public HtmlReport[] Reporting = new HtmlReport[0];

        [JsonProperty("attempts")] public int Attempts = 0;

        [JsonProperty("aborted")] public bool WasAborted = false;

        [JsonProperty("time")] public string time = DateTime.Now.ToString("t");

        private static SpecResults GetAbortedResults(string id, string message)
        {
            return new SpecResults
            {
                Counts = new Counts(0, 0, 1, 0),
                WasAborted = true,
                Results = new IResultMessage[]
                {
                    new StepResult(id, ResultStatus.error)
                    {
                        position = Stage.engine,
                        error = message
                    }
                }
            };
        }

        public static SpecResults ForAbortedRun(string id)
        {
            return GetAbortedResults(id, "Invalid Engine State, aborted Specification execution");
        }

    }
}
