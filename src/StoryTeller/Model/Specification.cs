using System;
using System.Collections.Generic;
using System.Linq;
using Baseline;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using StoryTeller.Grammars;
using StoryTeller.Model.Persistence;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Model
{
    public enum SpecType
    {
        header,
        full
    }

    public class Specification : Node, INodeHolder
    {
        [JsonProperty("title")] public string name;

        public string path;

        [JsonProperty("max-retries")] public int MaxRetries;

        [JsonProperty("expiration-period")] public int ExpirationPeriod;

        [JsonConverter(typeof (LastUpdatedConverter))]
        [JsonProperty("last-updated")]
        public DateTime LastUpdated
        {
            get
            {
                if (!_lastUpdated.HasValue)
                {
                    _lastUpdated = DateTime.Now;
                }
                return _lastUpdated.Value;
            }
            set { _lastUpdated = value; }
        }


        [JsonConverter(typeof (StringEnumConverter))] [JsonProperty("lifecycle")] public Lifecycle Lifecycle =
            Lifecycle.Acceptance;

        [JsonConverter(typeof (StringEnumConverter))] [JsonProperty("mode")] public SpecType SpecType = SpecType.full;

        private string _fileName;

        [JsonIgnore]
        public string Filename
        {
            get { return _fileName; }
            set { _fileName = value.ToFullPath(); }
        }

        private readonly IList<Breakpoint> _breakpoints = new List<Breakpoint>(); 

        [JsonProperty("breakpoints")]
        public Breakpoint[] Breakpoints
        {
            get { return _breakpoints.ToArray(); }
            set
            {
                _breakpoints.Clear();
                _breakpoints.AddRange(value);
            }
        }

        public void SetBreakpoint(Breakpoint breakpoint)
        {
            _breakpoints.Fill(breakpoint);
        }

        public void RemoveBreakpoint(Breakpoint breakpoint)
        {
            _breakpoints.Remove(breakpoint);
        }

        public bool MatchesBreakpoint(string id, object position)
        {
            return _breakpoints.Any(x => x.Matches(id, position));
        }

        public void ClearBreakpoints()
        {
            _breakpoints.Clear();
        }

        public void WritePath(string parentPath)
        {
            path = Suite.JoinPath(parentPath, name);
        }

        public string SuitePath()
        {
            return Suite.SuitePathOf(path);
        }

        public void ReadBody()
        {
            if (SpecType == SpecType.full) return;

            XmlReader.FillBody(this);
            SpecType = SpecType.full;
        }

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
            return id?.GetHashCode() ?? 0;
        }

        [JsonProperty("tags")] public readonly IList<string> Tags = new List<string>();
        private DateTime? _lastUpdated;

        [JsonProperty("steps", ItemConverterType = typeof (NodeConverter))]
        public IList<Node> Children { get; } = new List<Node>();

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
                .Each(group => { group.Each(x => x.id = Guid.NewGuid().ToString()); });
        }

        public Specification Clone()
        {
            var json = JsonSerialization.ToCleanJson(this);
            var clone = JsonSerialization.Deserialize<Specification>(json);

            clone.id = Guid.NewGuid().ToString();

            return clone;
        }
    }

    public class LastUpdatedConverter : JsonConverter
    {
        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            writer.WriteValue(((DateTime) value).ToString("D"));
        }

        public override object ReadJson(JsonReader reader, Type objectType, object existingValue,
            JsonSerializer serializer)
        {
            return DateTime.Parse(reader.Value.ToString());
        }

        public override bool CanConvert(Type objectType)
        {
            return objectType == typeof (DateTime);
        }
    }
}