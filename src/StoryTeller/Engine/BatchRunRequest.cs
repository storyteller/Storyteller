using System;
using System.Collections.Generic;
using System.Linq;
using FubuCore;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;

namespace StoryTeller.Engine
{
    public class BatchRunRequest
    {
        public Lifecycle Lifecycle;
        public string Suite;

        public IEnumerable<Specification> Filter(Suite top)
        {
            if (Lifecycle == Lifecycle.Any && Suite.IsEmpty()) return top.GetAllSpecs();

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

            return specs.ToArray();
        }
    }

    public class SuiteNotFoundException : Exception
    {
        public SuiteNotFoundException(string suite, Suite top)
            : base("Unable to find suite '{0}' in {1}".ToFormat(suite, top.Folder)) { }
    }
}