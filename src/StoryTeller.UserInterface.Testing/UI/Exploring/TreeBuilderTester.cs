using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Exploring;

namespace StoryTeller.UserInterface.Testing.UI.Exploring
{
    [TestFixture]
    public class TreeBuilderTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
        }

        #endregion

        [Test]
        public void add_a_suite_node_directly_to_the_hierarchy()
        {
            var top = new TreeNode(new Hierarchy("project1"));
            var builder = new TreeBuilder(top);

            var suite = new Suite("suite1");
            builder.StartSuite(suite);

            top.Children.ShouldEqual(new INamedItem[] {suite});
        }

        [Test]
        public void add_a_test_node_directly_to_the_hierarchy()
        {
            var top = new TreeNode(new Hierarchy("project1"));
            var builder = new TreeBuilder(top);

            var test = new Test("test1");
            builder.Test(test);

            top.Children.ShouldEqual(new INamedItem[] {test});
        }

        [Test]
        public void add_suite_then_add_test()
        {
            var top = new TreeNode(new Hierarchy("project1"));
            var builder = new TreeBuilder(top);
            var suite = new Suite("suite1");
            var test = new Test("test1");

            builder.StartSuite(suite);
            builder.Test(test);

            top.Items[0].ShouldBeOfType<TreeNode>().Children.ShouldEqual(new INamedItem[] {test});
        }

        [Test]
        public void add_suite_then_add_test_then_finish_suite_then_add_test_directly_to_hierarchy()
        {
            var top = new TreeNode(new Hierarchy("project1"));
            var builder = new TreeBuilder(top);
            var suite = new Suite("suite1");
            var test1 = new Test("test1");
            var test2 = new Test("test2");

            builder.StartSuite(suite);
            builder.Test(test1);
            builder.EndSuite(suite);
            builder.Test(test2);

            top.Children.ShouldEqual(new INamedItem[] {suite, test2});
        }
    }
}