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

            IEnumerable<Specification> nodes = null;

            if (Suite.IsNotEmpty())
            {
                var suite = top.suites.FirstOrDefault(x => x.name == Suite);
                if (suite == null) return new Specification[0];

                nodes = suite.GetAllSpecs();
            }
            else
            {
                nodes = top.GetAllSpecs();
            }

            if (Lifecycle != Lifecycle.Any)
            {
                nodes = nodes.Where(x => x.Lifecycle == Lifecycle);
            }

            

            return nodes.ToArray();
        }
    }
}