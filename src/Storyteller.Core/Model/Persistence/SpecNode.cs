using Newtonsoft.Json;

namespace Storyteller.Core.Model.Persistence
{
    public class SpecNode
    {
        public string name;
        public string path;
        public string lifecycle;
        public string id;

        [JsonIgnore]
        public string filename;

        public void WritePath(string parentPath)
        {
            path = Suite.JoinPath(parentPath, name);
        }

        public string SuitePath()
        {
            return Suite.SuitePathOf(path);
        }
    }
}