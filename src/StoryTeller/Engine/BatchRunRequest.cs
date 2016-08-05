using System;
using System.Collections.Generic;
using System.Linq;
using Baseline;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;

namespace StoryTeller.Engine
{
    public class BatchRunRequest
    {
        public Lifecycle Lifecycle;
        public string Suite;
        public string SpecPath;
        public string[] Tags;

        public IEnumerable<Specification> Filter(Suite top)
        {
            IEnumerable<Specification> specs;
            if (Suite.IsNotEmpty())
            {
                var suite = top.suites.FirstOrDefault(x => x.name == Suite);
                if (suite == null)
                    throw new SuiteNotFoundException(Suite, top);

                specs = suite.GetAllSpecs();
            }
            else
            {
                specs = top.GetAllSpecs();
            }

            if (Lifecycle != Lifecycle.Any)
            {
                specs = specs.Where(x => x.Lifecycle == Lifecycle);
            }

            var tags = Tags ?? new string[0];
            if (tags.Any())
            {
                specs = specs.Where(spec => tags.All(tag => !spec.Tags.Contains(tag)));
            }

            return specs.ToArray();
        }
    }

    public class SuiteNotFoundException : Exception
    {
        public SuiteNotFoundException(string suite, Suite top)
            : base("Unable to find suite '{0}' in {1}".ToFormat(suite, top.Folder)) { }
    }
}
