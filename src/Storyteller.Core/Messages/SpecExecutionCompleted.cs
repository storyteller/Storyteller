using System;
using Newtonsoft.Json;

namespace Storyteller.Core.Messages
{
    public class SpecExecutionCompleted : ClientMessage
    {
        [JsonProperty("id")]
        public string Id { get; set; }

        [JsonProperty("counts")]
        public Counts Counts { get; set; }

        [JsonProperty("duration")]
        public double Duration { get; set; }

        public SpecExecutionCompleted(string id, Counts counts, double duration) : base("spec-execution-completed")
        {
            Id = id;
            Counts = counts;
            Duration = duration;
            Time = DateTime.Now;
        }

        [JsonProperty("time")]
        public DateTime Time { get; set; }
    }
}