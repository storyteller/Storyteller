using FubuCore;
using Newtonsoft.Json;
using StoryTeller.Messages;

namespace StoryTeller.Model.Persistence
{
    public class SpecNode
    {
        public string name;
        public string path;
        public string lifecycle;
        public string id;

        private string _fileName;

        [JsonIgnore]
        public string Filename
        {
            get { return _fileName; }
            set { _fileName = value.ToFullPath(); }
        }

        public void WritePath(string parentPath)
        {
            path = Suite.JoinPath(parentPath, name);
        }

        public string SuitePath()
        {
            return Suite.SuitePathOf(path);
        }

        public SpecExecutionCompleted last;

        protected bool Equals(SpecNode other)
        {
            return string.Equals(id, other.id);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((SpecNode) obj);
        }

        public override int GetHashCode()
        {
            return (id != null ? id.GetHashCode() : 0);
        }
    }
}