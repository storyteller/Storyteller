using System;
using System.Collections;
using System.Linq;
using Newtonsoft.Json;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;

namespace StoryTeller.Messages
{
    public class HierarchyLoaded : ClientMessage
    {
        public readonly Suite hierarchy;
        public readonly SpecRecord[] specs;

        public HierarchyLoaded(Suite top, ResultsCache results) : base("hierarchy-loaded")
        {
            hierarchy = top;

            specs = top.GetAllSpecs().Select(x => new SpecRecord(x, results)).ToArray();
        }


        protected bool Equals(HierarchyLoaded other)
        {
            return Equals(hierarchy, other.hierarchy);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((HierarchyLoaded)obj);
        }
        
        public override int GetHashCode()
        {
            return (hierarchy != null ? hierarchy.GetHashCode() : 0);
        }
    }

    public class SpecRecord
    {
        public SpecRecord(Specification data, ResultsCache cache)
        {
            this.data = data;
            LastResults = cache.LastResultFor(data.id);
        }

        [JsonProperty("last_result")]
        public SpecExecutionCompleted LastResults { get; set; }

        public Specification data { get; }

    }
}