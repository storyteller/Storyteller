using FubuCore.Util;

namespace StoryTeller.Model.Persistence
{
    public class Hierarchy
    {
        public Suite Top { get; set; }

        public readonly Cache<string, SpecNode> Nodes = new Cache<string, SpecNode>();
        public readonly Cache<string, Suite> Suites = new Cache<string, Suite>(); 
    }
}