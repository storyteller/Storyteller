using System.Threading.Tasks;
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
    }
}
