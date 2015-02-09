using System;
using Newtonsoft.Json;
using Storyteller.Core.Model.Persistence;

namespace Storyteller.Core.Messages
{
    public abstract class ClientMessage
    {
        [JsonProperty("type")]
        public string Type { get; private set; }

        protected ClientMessage(string type)
        {
            Type = type;
        }
    }

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

    public class HiearchyLoaded : ClientMessage
    {
        public Suite root;

        public HiearchyLoaded(Suite root) : base("hierarchy-loaded")
        {
            this.root = root;
        }
    }

    public class SpecQueued : ClientMessage
    {
        public string id;

        public SpecQueued(string id) : base("spec-queued")
        {
            this.id = id;
        }
    }

    public class SpecCanceled : ClientMessage
    {
        public string id;

        public SpecCanceled(string id) : base("spec-canceled")
        {
            this.id = id;
        }
    }

    public class SpecRunning : ClientMessage
    {
        public string id;

        public SpecRunning(string id) : base("spec-running")
        {
            this.id = id;
        }
    }

    public class SpecProgress : ClientMessage
    {
        public string id;
        public Counts counts;
        public int step;
        public int total;

        public SpecProgress(string id, Counts counts, int step, int total) : base("spec-progress")
        {
            this.id = id;
            this.counts = counts;
            this.step = step;
            this.total = total;
        }
    }
}