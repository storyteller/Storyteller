using System.Collections.Generic;
using System.Linq;

namespace Storyteller.Core.Model.Persistence
{
    public class Suite
    {
        public static string JoinPath(string parent, string name)
        {
            return (parent + '/' + name).Trim('/');
        }

        public Suite[] suites;
        public SpecNode[] specs;
        public string name;
        public string path;

        public void WritePath(string parentFolder)
        {
            path = JoinPath(parentFolder, name);

            if (suites != null) suites.Each(x => x.WritePath(path));
            if (specs != null) specs.Each(x => x.WritePath(path));
        }

        public IEnumerable<SpecNode> GetAllSpecs()
        {
            return specs.Union(suites.SelectMany(x => x.GetAllSpecs()));
        }
    }
}