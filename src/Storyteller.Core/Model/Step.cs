using System.Collections.Generic;

namespace Storyteller.Core.Model
{
    public abstract class Node
    {
        public string Id { get; set; }
    }

    public enum Lifecycle
    {
        Acceptance,
        Regression
    }

    public class Specification : Node
    {
        public string FileName;
        public Lifecycle Lifecycle = Lifecycle.Acceptance;
        // Only run once if its acceptance
        public int MaxRetries;
        public string Name;
        public string Suite;
        public readonly IList<Node> Steps = new List<Node>();
        public readonly IList<string> Tags = new List<string>();
    }

    public class Step : Node
    {
        public readonly IDictionary<string, IList<Node>> Collections = new Dictionary<string, IList<Node>>();
        public readonly string Key;
        public readonly IDictionary<string, string> Values = new Dictionary<string, string>();

        public Step(string key)
        {
            Key = key;
        }

        public Step With(string key, string value)
        {
            Values.Add(key, value);
            return this;
        }
    }

    public class Section : Node
    {
        public readonly string Key;
        public readonly IList<Step> Steps = new List<Step>();

        public Section(string key)
        {
            Key = key;
        }
    }


    public class Comment : Node
    {
        public string Text;
    }
}