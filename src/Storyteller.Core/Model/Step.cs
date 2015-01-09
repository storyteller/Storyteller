using System;
using System.Collections.Generic;

namespace Storyteller.Core.Model
{
    public interface IStep
    {
        
    }

    public enum Lifecycle
    {
        Acceptance,
        Regression
    }

    public class Specification : IStep
    {
        public Lifecycle Lifecycle = Lifecycle.Acceptance;
        public string Name;
        public string FileName;
        public string Suite;
        public readonly IList<string> Tags = new List<string>(); 

        // Only run once if its acceptance
        public int MaxRetries;

        public readonly IList<IStep> Steps = new List<IStep>(); 
    }

    public class Step : IStep
    {
        public Step(string key)
        {
            Key = key;
        }

        public readonly IDictionary<string, string> Values = new Dictionary<string, string>();
        public readonly IDictionary<string, IList<IStep>> Collections = new Dictionary<string, IList<IStep>>();

        public readonly string Key;

        public Step With(string key, string value)
        {
            Values.Add(key, value);
            return this;
        }
    }

    public class Section : IStep
    {
        public Section(string key)
        {
            Key = key;
        }

        public readonly IList<Step> Steps = new List<Step>();
        public readonly string Key;
    }


    public class Comment : IStep
    {
        public string Text;
    }
}