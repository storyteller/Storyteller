using System;
using Newtonsoft.Json;

namespace StoryTeller.Messages
{
    public class SpecExecutionCompleted : ClientMessage
    {

        [JsonProperty("id")]
        public string Id { get; set; }


        public SpecExecutionCompleted()
            : base("spec-execution-completed")
        {
        }

        public SpecExecutionCompleted(string id, SpecResults results) : this()
        {
            if (results == null) throw new ArgumentNullException("results");

            Results = results;
            Id = id;
            Time = DateTime.Now;
        }

        [JsonProperty("results")]
        public SpecResults Results { get; set; }

        [JsonProperty("time")]
        public DateTime Time { get; set; }

        protected bool Equals(SpecExecutionCompleted other)
        {
            return string.Equals(Id, other.Id) && Equals(Results.Counts, other.Results.Counts);
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
                return ((Id != null ? Id.GetHashCode() : 0)*397) ^ (Results.Counts != null ? Results.Counts.GetHashCode() : 0);
            }
        }
    }
}