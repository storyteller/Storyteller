using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using FubuCore;
using Newtonsoft.Json;
using Storyteller.Core.Grammars;
using Storyteller.Core.Model.Persistence;

namespace Storyteller.Core.Model
{
    public class Specification : Node, INodeHolder
    {
        [JsonIgnore]
        public string FileName;
        
        [JsonProperty("lifecycle")]
        public Lifecycle Lifecycle = Lifecycle.Acceptance;

        [JsonProperty("max-retries")]
        public int MaxRetries;
        
        [JsonProperty("title")]
        public string Name;

        public SpecificationPlan CreatePlan(FixtureLibrary library)
        {
            var sectionPlans = Children.OfType<Section>().Select(x => x.CreatePlan(library));
            return new SpecificationPlan(sectionPlans){Specification = this};
        }

        private readonly IList<Node> _children = new List<Node>();

        [JsonProperty("steps", ItemConverterType = typeof(NodeConverter))]
        public IList<Node> Children
        {
            get { return _children; }
        }

        [JsonProperty("tags")]
        public readonly IList<string> Tags = new List<string>();

        public Section AddSection(string key)
        {
            var section = new Section(key) {Id = Guid.NewGuid().ToString()};
            Children.Add(section);

            return section;
        }
    }
}




