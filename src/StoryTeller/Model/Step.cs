using System;
using System.Collections.Generic;
using System.Linq;
using Baseline;

using Newtonsoft.Json;

namespace StoryTeller.Model
{
    [Serializable]
    public class Step : Node, INodeHolder
    {
        [JsonIgnore] public readonly Cache<string, Section> Collections =
            new Cache<string, Section>(key => new Section(key));


        [JsonProperty("key")] public readonly string Key;

        [JsonProperty("cells")] public readonly IDictionary<string, string> Values = new Dictionary<string, string>();

        public Step(string key)
        {
            Key = key;
        }

        public Section[] collections
        {
            get { return Collections.GetAll(); }
            set
            {
                value.Each(pair => Collections[pair.Key] = pair);
            }
        }

        public Step With(string key, string value)
        {
            Values.Add(key, value);
            return this;
        }

        public static IDictionary<string, string> ParseValues(string text)
        {
            var dict = new Dictionary<string, string>();
            if (text.IsEmpty()) return dict;

            string[] data = text.Split(',');
            foreach (string property in data)
            {
                string[] parts = property.Split(':');
                dict.Add(parts[0].Trim(), parts[1].Trim());
            }

            return dict;
        }

        public void AssertValuesMatch(Step other)
        {
            if (other.Values.Count != Values.Count) throwValuesDoNotMatch(other);

            string[] otherKeys = other.Values.Keys.OrderBy(x => x).ToArray();
            string[] keys = Values.Keys.OrderBy(x => x).ToArray();
            if (!otherKeys.SequenceEqual(keys)) throwValuesDoNotMatch(other);

            other.Values.Keys.Each(key => { if (other.Values[key] != Values[key]) throwValuesDoNotMatch(other); });
        }

        private void throwValuesDoNotMatch(Step other)
        {
            throw new Exception("Step values do not match. \n  1st --> {0}\n  2nd --> {1}".ToFormat(ToValueString(),
                other.ToValueString()));
        }

        public string ToValueString()
        {
            string values = Values
                .Select(pair => "{0}={1}".ToFormat(pair.Key, pair.Value))
                .Join(", ");

            return "Step '{0}' with values {1}".ToFormat(Key, values);
        }

        public Section AddCollection(string key)
        {
            var section = new Section(key);
            Collections[key] = section;

            return section;
        }

        [JsonIgnore]
        public IList<Node> Children
        {
            get { return Collections.OfType<Node>().ToList(); }
        }
    }
}