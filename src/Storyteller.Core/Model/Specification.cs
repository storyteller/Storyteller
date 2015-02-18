using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;
using Storyteller.Core.Grammars;
using Storyteller.Core.Model.Persistence;

namespace Storyteller.Core.Model
{
    public class Specification : Node, INodeHolder
    {
        [JsonProperty("tags")] public readonly IList<string> Tags = new List<string>();
        private readonly IList<Node> _children = new List<Node>();
        [JsonIgnore] public string FileName;

        [JsonProperty("lifecycle")] public Lifecycle Lifecycle = Lifecycle.Acceptance;

        [JsonProperty("max-retries")] public int MaxRetries;

        [JsonProperty("title")] public string Name;

        [JsonProperty("steps", ItemConverterType = typeof (NodeConverter))]
        public IList<Node> Children
        {
            get { return _children; }
        }

        public SpecificationPlan CreatePlan(FixtureLibrary library)
        {
            var sectionPlans = Children.OfType<Section>().Select(x => x.CreatePlan(library));
            return new SpecificationPlan(sectionPlans) {Specification = this};
        }

        public static string DetermineFilename(string name)
        {
            var filename = name + ".xml";

            if (filename.Contains(" "))
            {
                filename = filename.Replace(' ', '_');
            }

            return filename;
        }

        public Section AddSection(string key)
        {
            var section = new Section(key) {Id = Guid.NewGuid().ToString()};
            Children.Add(section);

            return section;
        }

        public SpecNode ToNode()
        {
            return new SpecNode
            {
                name = Name,
                id = Id,
                lifecycle = Lifecycle.ToString()
            };
        }

        public void ReadNode(SpecNode node)
        {
            Name = node.name;
            Id = node.id;
            Lifecycle = (Lifecycle) Enum.Parse(typeof(Lifecycle), node.lifecycle);
        }
    }
}