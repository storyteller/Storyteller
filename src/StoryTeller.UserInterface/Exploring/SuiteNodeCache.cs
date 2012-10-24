using FubuCore.Util;
using StoryTeller.Domain;

namespace StoryTeller.UserInterface.Exploring
{
    public class SuiteNodeCache : Cache<Suite, TreeNode>
    {
        public SuiteNodeCache()
            : base(suite => new TreeNode(suite))
        {
        }
    }
}