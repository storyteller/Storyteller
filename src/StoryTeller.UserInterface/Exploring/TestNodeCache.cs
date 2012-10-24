using FubuCore.Util;
using StoryTeller.Domain;

namespace StoryTeller.UserInterface.Exploring
{
    public class TestNodeCache : Cache<Test, TreeNode>
    {
        public TestNodeCache()
            : base(test => new TreeNode(test))
        {
        }
    }
}