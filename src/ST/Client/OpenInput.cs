using System.Threading.Tasks;
using FubuCore;
using Storyteller.Core.CommandLine;
using Storyteller.Core.Model.Persistence;

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