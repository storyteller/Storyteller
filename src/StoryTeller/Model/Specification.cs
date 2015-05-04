using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using StoryTeller.Grammars;
using StoryTeller.Model.Persistence;

namespace StoryTeller.Model
{
    [Serializable]
    public class Specification : SpecNode, INodeHolder
    {
        [JsonProperty("tags")] public readonly IList<string> Tags = new List<string>();
        private readonly IList<Node> _children = new List<Node>();

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

            return filename.EscapeIllegalChars();
        }

        public Section AddSection(string key)
        {
            var section = new Section(key) {id = Guid.NewGuid().ToString()};
            Children.Add(section);

            return section;
        }

        [Obsolete("Think we can make this go away")]
        public SpecNode ToNode()
        {
            return new SpecNode
            {
                name = name,
                id = id,
                Lifecycle = Lifecycle
            };
        }

        [Obsolete("Think we can make this go away")]
        public void ReadNode(SpecNode node)
        {
            name = node.name;
            id = node.id;
            Lifecycle = node.Lifecycle;
        }


        public IEnumerable<Node> AllNodes()
        {
            return allNodes().ToArray();
        }

        private IEnumerable<Node> allNodes()
        {
            yield return this;

            foreach (var descendent in AllDescendents())
            {
                yield return descendent;
            }
        }


        public bool NeedsToBeRenumbered()
        {
            return AllNodes().GroupBy(x => x.id).Any(x => x.Count() > 1);
        }

        public void ApplyRenumbering()
        {
            AllDescendents().ToArray().GroupBy(x => x.id).Where(x => x.Count() > 1)
                .Each(group =>
                {
                    group.Each(x => x.id = Guid.NewGuid().ToString());
                });
        }
    }
}