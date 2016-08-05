using System;
using Baseline;


namespace StoryTeller.Model.Persistence
{
    public class Hierarchy
    {
        public Suite Top { get; set; }

        public readonly LightweightCache<string, Specification> Specifications = new LightweightCache<string, Specification>();
        public readonly LightweightCache<string, Suite> Suites = new LightweightCache<string, Suite>();

        public void Replace(Specification specification)
        {
            var original = Specifications[specification.id];
            var suite = Suites[original.SuitePath()];

            specification.Filename = original.Filename;
            specification.path = original.path;
            suite.ReplaceSpecification(specification);
            Specifications[specification.id] = specification;
        }

        public void Replace(Specification specification, DateTime updatedTime)
        {
            specification.LastUpdated = updatedTime;
            Replace(specification);
        }

        public Specification RemoveSpec(string id)
        {
            if (!Specifications.Has(id)) return null;

            var old = Specifications[id];
            var suite = Suites[old.SuitePath()];

            suite.RemoveSpec(old);

            Specifications.Remove(id);

            return old;
        }
    }
}