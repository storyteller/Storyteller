using Newtonsoft.Json;

namespace StoryTeller.Engine
{
    public class PerfRecord
    {
        public PerfRecord(string type, string subject, long start, long threshold)
        {
            Type = type;
            Subject = subject;
            Start = start;
            Threshold = threshold;
        }

        public override string ToString()
        {
            return $"{Type}/{Subject} from {Start} to {End} exceeded its threshold ({Threshold} ms)";
        }

        public void MarkEnd(long end)
        {
            End = end;
        }

        [JsonProperty("type")]
        public string Type { get; }

        [JsonProperty("subject")]
        public string Subject { get; }

        [JsonProperty("start")]
        public long Start { get; }

        [JsonProperty("end")]
        public long End { get; private set; }

        [JsonProperty("duration")]
        public long Duration => End - Start;

        [JsonProperty("perfFailure")]
        public bool PerfViolation {
            get
            {
                if (Threshold <= 0) return false;

                return Duration > Threshold;
            }
        }

        [JsonProperty("threshold")]
        public long Threshold { get; set; }
    }
}