﻿using System.Linq;
using Newtonsoft.Json;

namespace StoryTeller.TestRail.Models.Runs
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
