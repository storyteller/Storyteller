using Newtonsoft.Json;
using StoryTeller.Remotes;

namespace StoryTeller.Messages
{
    public class InitialModel : ClientMessage
    {
        [JsonProperty("recycled")]
        public SystemRecycled Recycled { get; }

        [JsonProperty("hierarchy")]
        public HierarchyLoaded Hierarchy { get; }

        [JsonProperty("queue-state")]
        public QueueState QueueState { get; }


        public string wsAddress { get; set; }

        public InitialModel(SystemRecycled recycled, HierarchyLoaded hierarchy, QueueState queue) : base("initial-model")
        {
            Recycled = recycled;
            Hierarchy = hierarchy;
            QueueState = queue;
        }
    }
}