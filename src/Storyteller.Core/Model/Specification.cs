using System;
using System.Collections.Generic;
using System.Linq;
using Storyteller.Core.Grammars;

namespace Storyteller.Core.Model
{
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

        public Section AddSection(string key)
        {
            var section = new Section(key) {Id = Guid.NewGuid().ToString()};
            Children.Add(section);

            return section;
        }
    }
}