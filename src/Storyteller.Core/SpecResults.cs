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

    }
}