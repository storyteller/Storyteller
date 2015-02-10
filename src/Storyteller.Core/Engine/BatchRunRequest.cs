using System.Collections.Generic;
using System.Linq;
using FubuCore;
using Storyteller.Core.Model;
using Storyteller.Core.Model.Persistence;

namespace Storyteller.Core.Engine
{
    public class BatchRunRequest
    {
        public Lifecycle Lifecycle;
        public string Suite;

        public IEnumerable<SpecNode> Filter(Suite top)
        {
            if (Lifecycle == Lifecycle.Any && Suite.IsEmpty()) return top.GetAllSpecs();

            IEnumerable<SpecNode> nodes = null;

            if (Suite.IsNotEmpty())
            {
                var suite = top.suites.FirstOrDefault(x => x.name == Suite);
                if (suite == null) return new SpecNode[0];

                nodes = suite.GetAllSpecs();
            }
            else
            {
                nodes = top.GetAllSpecs();
            }

            if (Lifecycle != Lifecycle.Any)
            {
                nodes = nodes.Where(x => x.lifecycle == Lifecycle.ToString());
            }

            

            return nodes.ToArray();
        }
    }
}