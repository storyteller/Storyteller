using FubuCore.Util;

namespace Storyteller.Core.Model.Persistence
{
    public class Hierarchy
    {
        public readonly Cache<string, SpecNode> Nodes = new Cache<string, SpecNode>();
        public readonly Cache<string, Suite> Suites = new Cache<string, Suite>(); 
    }
}