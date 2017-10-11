using System.Threading.Tasks;
using Oakton;
using StoryTeller.Model.Persistence;
using StoryTeller.Remotes;

namespace ST.Client
{
    public class OpenInput : ProjectInput
    {
        public OpenInput() : base(EngineMode.Interactive)
        {
        }

        public Task<Suite> ReadHierarchy()
        {
            return Task.Factory.StartNew(() => HierarchyLoader.ReadHierarchy(SpecPath));
        }

        [FlagAlias("hotreload"), Description("Only for Storyteller development itself")]
        public bool HotReloadFlag { get; set; }
    }
}
