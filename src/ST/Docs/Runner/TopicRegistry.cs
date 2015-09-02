using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FubuMVC.Core;
using FubuMVC.Core.Assets;
using FubuMVC.Core.Diagnostics.Packaging;
using FubuMVC.Core.Http.Hosting;
using FubuMVC.Core.Registration;
using FubuMVC.Core.Registration.Nodes;
using ST.Docs.Samples;
using ST.Docs.Todos;
using ST.Docs.Topics;

namespace ST.Docs.Runner
{
    public class TopicRegistry : FubuRegistry, IChainSource
    {
        private readonly Topic _top;

        public TopicRegistry(Topic top)
        {
            _top = top;

            HostWith<NOWIN>();

            Actions.FindBy(_ => _.IncludeTypesNamed(x => x.EndsWith("DocTool")));
            Actions.IncludeType<SampleExplorer>();
            Actions.IncludeType<TodoExplorer>();
            Actions.DisableDefaultActionSource();

            Policies.ChainSource(this);

            AlterSettings<AssetSettings>(_ =>
            {
                _.AllowableExtensions.Add(".json");
            });
        }

        public Task<BehaviorChain[]> BuildChains(BehaviorGraph graph, IPerfTimer timer)
        {
            return Task.FromResult(BuildChains(graph).ToArray());
        }

        public IEnumerable<BehaviorChain> BuildChains(BehaviorGraph graph)
        {
            return _top.AllTopicsInOrder().Select(x => new TopicChain(x));
        }
    }
}