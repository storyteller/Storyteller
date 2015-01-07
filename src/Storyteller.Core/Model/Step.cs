using System;
using System.Collections.Generic;

namespace Storyteller.Core.Model
{
    public class Step
    {
        public Step(string key)
        {
            Key = key;
        }

        public readonly IDictionary<string, string> Values = new Dictionary<string, string>();
        public readonly IDictionary<string, IList<Step>> Collections = new Dictionary<string, IList<Step>>();

        public readonly string Key;

        public Step With(string key, string value)
        {
            Values.Add(key, value);
            return this;
        }
    }

    public class Comment
    {
        public string Text;
    }
}