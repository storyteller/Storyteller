using System.Threading.Tasks;
using FubuCore.CommandLine;
using StoryTeller.Model.Persistence;
using ProjectInput = ST.CommandLine.ProjectInput;

namespace ST.Client
{
    public class OpenInput : ProjectInput
    {
        public Task<Suite> ReadHierarchy()
        {
            return Task.Factory.StartNew(() => HierarchyLoader.ReadHierarchy(SpecPath));
        }

        [FlagAlias("disable-auto-recycle")]
        public bool DisableAutoRecycleFlag
        {
            set { _disableAppDomainFileWatching = value; }
        }
    }
}
