using System.Linq;
using Newtonsoft.Json;

namespace StoryTeller.TestRail.Runs
{
    public class AddRunRequest
    {
        [JsonIgnore]
        public int project_id { get; set; }
        public string name { get; set; }
        public bool include_all => case_ids == null || !case_ids.Any();
        public string description { get; set; }
        public int[] case_ids { get; set; }
    }
}
