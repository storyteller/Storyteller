using System.Threading.Tasks;
using Oakton;
using StoryTeller.Model.Persistence;
using StoryTeller.Remotes;
using ProjectInput = StoryTeller.Commands.ProjectInput;

namespace ST.Client
{
    public class OpenInput : StoryTeller.Commands.ProjectInput
    {
        public OpenInput() : base(EngineMode.Interactive)
        {
        }

        public Task<Suite> ReadHierarchy()
        {
            return Task.Factory.StartNew(() => HierarchyLoader.ReadHierarchy(SpecPath));
        }

        [FlagAlias("disable-auto-recycle")]
        public bool DisableAutoRecycleFlag
        {
            set { _disableAppDomainFileWatching = value; }
        }

        [FlagAlias("hotreload"), Description("Only for Storyteller development itself")]
        public bool HotReloadFlag { get; set; }
    }
}
