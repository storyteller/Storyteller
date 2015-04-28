using System.Collections.Generic;
using System.Linq;
using FubuMVC.Core;
using FubuMVC.Core.Registration;
using FubuMVC.Core.Registration.Nodes;
using ST.Docs.Topics;

namespace ST.Docs.Runner
{
    public class TopicRegistry : FubuRegistry, IChainSource
    {
        private readonly Topic _top;

        public TopicRegistry(Topic top)
        {
            _top = top;

            Actions.FindBy(_ => _.IncludeTypesNamed(x => x.EndsWith("DocTool")));

            Policies.ChainSource(this);
        }

        public IEnumerable<BehaviorChain> BuildChains(BehaviorGraph graph)
        {
            return _top.AllTopicsInOrder().Select(x => new TopicChain(x));
        }
    }
}