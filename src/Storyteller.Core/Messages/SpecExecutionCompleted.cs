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

        protected bool Equals(SpecExecutionCompleted other)
        {
            return string.Equals(Id, other.Id) && Equals(Counts, other.Counts);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((SpecExecutionCompleted) obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                return ((Id != null ? Id.GetHashCode() : 0)*397) ^ (Counts != null ? Counts.GetHashCode() : 0);
            }
        }
    }
}