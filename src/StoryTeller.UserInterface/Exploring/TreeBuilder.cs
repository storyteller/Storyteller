using System.Collections.Generic;
using StoryTeller.Domain;

namespace StoryTeller.UserInterface.Exploring
{
    public class TreeBuilder : IHierarchyVisitor
    {
        private readonly Stack<TreeNode> _parent = new Stack<TreeNode>();
        private readonly SuiteNodeCache _suiteCache;
        private readonly TestNodeCache _testCache;


        public TreeBuilder(TreeNode topNode, TestNodeCache testCache, SuiteNodeCache suiteCache)
        {
            _testCache = testCache;
            _suiteCache = suiteCache;
            _parent.Push(topNode);
        }

        public TreeBuilder(TreeNode topNode)
            : this(topNode, new TestNodeCache(), new SuiteNodeCache())
        {
        }

        #region IHierarchyVisitor Members

        public void StartSuite(Suite suite)
        {
            TreeNode node = _suiteCache[suite];
            _parent.Peek().Add(node);
            _parent.Push(node);
        }

        public void EndSuite(Suite suite)
        {
            _parent.Pop();
        }

        public void Test(Test test)
        {
            TreeNode node = _testCache[test];
            _parent.Peek().Add(node);
        }

        #endregion
    }
}