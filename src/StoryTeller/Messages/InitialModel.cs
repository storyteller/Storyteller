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
        public string wsAddress { get; set; }

        public InitialModel(SystemRecycled recycled, HierarchyLoaded hierarchy) : base("initial-model")
        {
            Recycled = recycled;
            Hierarchy = hierarchy;
        }
    }
}