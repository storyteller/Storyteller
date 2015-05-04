using FubuCore.Util;

namespace StoryTeller.Model.Persistence
{
    public class Hierarchy
    {
        public Suite Top { get; set; }

        public readonly Cache<string, Specification> Specifications = new Cache<string, Specification>();
        public readonly Cache<string, Suite> Suites = new Cache<string, Suite>();

        public void Replace(Specification specification)
        {
            var original = Specifications[specification.id];
            var suite = Suites[original.SuitePath()];

            specification.Filename = original.Filename;
            specification.path = original.path;
            suite.ReplaceSpecification(specification);
            Specifications[specification.id] = specification;
        }
    }
}