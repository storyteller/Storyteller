using System;
using System.Collections.Generic;
using System.Linq;
using FubuCore;
using FubuCore.Util;
using Storyteller.Core.Grammars;

namespace Storyteller.Core.Model
{
    public abstract class Node
    {
        protected Node()
        {
            Id = Guid.NewGuid().ToString();
        }

        public string Id { get; set; }
    }

    public enum Lifecycle
    {
        Acceptance,
        Regression
    }


    public interface INodeHolder
    {
        IList<Node> Children { get; }
    }



    public class Specification : Node, INodeHolder
    {
        public string FileName;
        public Lifecycle Lifecycle = Lifecycle.Acceptance;
        // Only run once if its acceptance
        public int MaxRetries;
        public string Name;

        public IExecutionStep CreatePlan(FixtureLibrary library)
        {
            var sectionPlans = Children.OfType<Section>().Select(x => x.CreatePlan(library));
            return new SpecificationPlan(sectionPlans);
        }

        private readonly IList<Node> _children = new List<Node>();

        public IList<Node> Children
        {
            get { return _children; }
        }

        public readonly IList<string> Tags = new List<string>();
    }

    public class Step : Node
    {
        public readonly Cache<string, Section> Collections = new Cache<string, Section>(key => new Section(key)); 
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
    }


    public class Comment : Node
    {
        public string Text;
    }
}