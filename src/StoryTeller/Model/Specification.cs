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
    public class Specification : Node, INodeHolder
    {
        private readonly IList<SpecError> _errors = new List<SpecError>();

        public void AddError(SpecError error)
        {
            _errors.Add(error);
        }

        public SpecError[] errors
        {
            get => _errors.ToArray();
            set
            {
                _errors.Clear();
                if (value != null) _errors.AddRange(value);
            }
        }

        [JsonProperty("title")] public string name;

        public string path;

        [JsonProperty(SpecConstants.MaxRetries)] public int MaxRetries;

        [JsonConverter(typeof (LastUpdatedConverter))]
        [JsonProperty(SpecConstants.LastUpdated)]
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
            set => _lastUpdated = value;
        }


        [JsonConverter(typeof (StringEnumConverter))] [JsonProperty(SpecConstants.Lifecycle)] public Lifecycle Lifecycle =
            Lifecycle.Acceptance;


        private string _fileName;

        [JsonIgnore]
        public string Filename
        {
            get => _fileName;
            set => _fileName = value.ToFullPath();
        }

        private readonly IList<Breakpoint> _breakpoints = new List<Breakpoint>(); 

        [JsonProperty("breakpoints")]
        public Breakpoint[] Breakpoints
        {
            get => _breakpoints.ToArray();
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

        [JsonProperty(SpecConstants.Tags, ItemTypeNameHandling = TypeNameHandling.None, TypeNameHandling = TypeNameHandling.None)] public string[] Tags = new string[0];
        private DateTime? _lastUpdated;

        [JsonProperty("steps", ItemConverterType = typeof (NodeConverter), TypeNameHandling = TypeNameHandling.None, ItemTypeNameHandling = TypeNameHandling.None)]
        public IList<Node> Children { get; } = new List<Node>();

        public SpecificationPlan CreatePlan(FixtureLibrary library)
        {
            var sectionPlans = Children.OfType<Section>().Select(x => x.CreatePlan(library));
            return new SpecificationPlan(sectionPlans) {Specification = this};
        }

        public static string DetermineFilename(string name)
        {
            var filename = name + ".md";

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

        public void ClearErrors()
        {
            _errors.Clear();
        }

        public bool HasNoSteps()
        {
            return !Children.OfType<Section>()
                .SelectMany(x => x.Children.OfType<Step>()).Any();
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
            DateTime time = DateTime.MinValue;

            DateTime.TryParse(reader.Value.ToString(), out time);

            return time;
        }

        public override bool CanConvert(Type objectType)
        {
            return objectType == typeof (DateTime);
        }
    }
}