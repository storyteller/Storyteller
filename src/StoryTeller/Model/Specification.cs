using System;
using System.Collections.Generic;
using System.Linq;
using FubuCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using StoryTeller.Grammars;
using StoryTeller.Model.Persistence;

namespace StoryTeller.Model
{
    [Serializable]
    public class Specification : Node, INodeHolder
    {
        [JsonProperty("title")]
        public string name;

        public string path;

        [JsonProperty("max-retries")]
        public int MaxRetries;

        [JsonConverter(typeof (StringEnumConverter))] 
        [JsonProperty("lifecycle")] 
        public Lifecycle Lifecycle = Lifecycle.Acceptance;

        private string _fileName;

        [JsonIgnore]
        public string Filename
        {
            get { return _fileName; }
            set { _fileName = value.ToFullPath(); }
        }

        public void WritePath(string parentPath)
        {
            path = Suite.JoinPath(parentPath, name);
        }

        public string SuitePath()
        {
            return Suite.SuitePathOf(path);
        }

        [NonSerialized]
        [Obsolete("Going to remove this altogether")]
        public SpecResults results;

        protected bool Equals(Specification other)
        {
            return string.Equals(id, other.id);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((Specification) obj);
        }

        public override int GetHashCode()
        {
            return (id != null ? id.GetHashCode() : 0);
        }

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