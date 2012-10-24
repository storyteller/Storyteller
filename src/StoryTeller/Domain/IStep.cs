using System;
using System.Collections.Generic;
using FubuCore.Util;
using StoryTeller.Engine;

namespace StoryTeller.Domain
{
    public interface IStep : ITestPart
    {
        string GrammarKey { get; }

        [Obsolete("shouldn't be exposed")]
        Cache<string, string> Values { get; }

        IEnumerable<string> Attributes { get; }

        string Description { get; set; }

        IList<PropertyError> Validate(IEnumerable<Cell> cells);

        void Set(string key, object value);
        void Remove(string key);
        string Get(string key);

        bool Has(string key);
        bool HasLeaf(string name);

        StepLeaf LeafFor(string name);

        void EachLeaf(Action<string, StepLeaf> action);

        IStep ShallowClone();
    }
}