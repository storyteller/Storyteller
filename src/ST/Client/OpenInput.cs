using System.Threading.Tasks;
using FubuCore;
using StoryTeller.Model.Persistence;
using ProjectInput = ST.CommandLine.ProjectInput;

namespace ST.Client
{
    public class OpenInput : ProjectInput
    {
        public string SpecPath
        {
            get { return Path.AppendPath("Specs"); }
        }

        public Task<Suite> ReadHierarchy()
        {
            return Task.Factory.StartNew(() => HierarchyLoader.ReadHierarchy(SpecPath));
        }
    }
}