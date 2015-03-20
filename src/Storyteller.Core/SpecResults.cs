using System;
using Newtonsoft.Json;
using Storyteller.Core.Engine;
using Storyteller.Core.Results;

namespace Storyteller.Core
{
    public class SpecResults
    {
        [JsonProperty("counts")]
        public Counts Counts { get; set; }

        [JsonProperty("results")]
        public IResultMessage[] Results { get; set; }

        [JsonProperty("performance")]
        public PerfRecord[] Performance { get; set; }

        [JsonProperty("duration")]
        public long Duration { get; set; }

        [JsonProperty("logging")]
        public HtmlReport[] Reporting { get; set; }

        [JsonProperty("attempts")]
        public int Attempts { get; set; }

        [JsonProperty("aborted")]
        public bool WasAborted { get; set; }

        public static SpecResults ForAbortedRun()
        {
            return new SpecResults
            {
                Attempts = 0,
                Counts = new Counts(0, 0, 0, 0),
                Duration = 0,
                Performance = new PerfRecord[0],
                Reporting = new HtmlReport[0],
                Results = new IResultMessage[0],
                WasAborted = true
            };
        }
    }
}