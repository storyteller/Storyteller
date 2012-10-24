using System.Windows.Controls;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Model;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Exploring;

namespace StoryTeller.UserInterface.Testing.UI.Exploring
{
    [TestFixture]
    public class TreeNodeTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            test = new Test("some test");
            node = new TreeNode(test);
        }

        #endregion

        private Test test;
        private TreeNode node;

        [Test]
        public void can_get_the_image_stream_from_an_icon()
        {
            Icon.Failed.ImageStream().ShouldNotBeNull();
            Icon.Pending.ImageStream().ShouldNotBeNull();
            Icon.RunningFailure.ImageStream().ShouldNotBeNull();
            Icon.RunningSuccess.ImageStream().ShouldNotBeNull();
            Icon.Success.ImageStream().ShouldNotBeNull();
            Icon.Unknown.ImageStream().ShouldNotBeNull();
        }

        [Test]
        public void find_immediate_treenode_parent_as_top()
        {
            var parent = new TreeNode(new Test("name"));
            parent.Items.Add(node);

            node.Top().ShouldBeTheSameAs(parent);
        }

        [Test]
        public void find_top_node_with_parent_equal_to_a_treeview()
        {
            var treeView = new TreeView();
            treeView.Items.Add(node);
            node.Top().ShouldBeTheSameAs(node);
        }

        [Test]
        public void find_top_node_with_parent_equal_to_null()
        {
            node.Top().ShouldBeTheSameAs(node);
        }

        [Test]
        public void find_ultimate_anscestor_as_top()
        {
            var parent = new TreeNode(new Test("name"));
            parent.Items.Add(node);

            var top = new TreeNode(new Hierarchy("project"));
            top.Items.Add(parent);

            node.Top().ShouldBeTheSameAs(top);
        }

        [Test]
        public void keeps_reference_to_the_item()
        {
            node.Subject.ShouldBeTheSameAs(test);
        }

        [Test]
        public void set_the_icon_to_pending_by_default()
        {
            node.Icon.ShouldEqual(Icon.Unknown);
        }

        [Test]
        public void set_the_text_to_the_name_of_a_test()
        {
            node.Text.ShouldEqual(test.Name);
        }
    }

    [TestFixture]
    public class when_updating_tree_nodes
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            top = new TreeNode(new FixtureLibrary());
            top.Add(new TreeNode(new FixtureLibrary()));
            top.Add(new TreeNode(new FixtureLibrary()));
            top.Add(new TreeNode(new FixtureLibrary()));
            top.Add(new TreeNode(new FixtureLibrary()));
            top.Add(new TreeNode(new FixtureLibrary()));
        }

        #endregion

        private TreeNode top;

        [Test]
        public void if_a_child_is_failed_then_top_should_be_failed()
        {
            top.NodeAt(0).Icon = Icon.Success;
            top.NodeAt(1).Icon = Icon.Failed;
            top.Icon.ShouldEqual(Icon.Failed);
        }

        [Test]
        public void if_any_child_is_pending_successful_the_top_should_override_to_that()
        {
            top.NodeAt(0).Icon = Icon.Success;
            top.NodeAt(1).Icon = Icon.Failed;
            top.NodeAt(2).Icon = Icon.Pending;
            top.NodeAt(3).Icon = Icon.RunningSuccess;
            top.Icon.ShouldEqual(Icon.RunningSuccess);
        }

        [Test]
        public void if_any_child_is_pending_then_the_top_is_pending()
        {
            top.NodeAt(0).Icon = Icon.Success;
            top.NodeAt(1).Icon = Icon.Failed;
            top.NodeAt(2).Icon = Icon.Pending;
            top.Icon.ShouldEqual(Icon.Pending);
        }

        [Test]
        public void if_child_is_successful_then_top_should_be_success()
        {
            top.NodeAt(0).Icon = Icon.Success;
            top.Icon.ShouldEqual(Icon.Success);
        }

        [Test]
        public void running_error_always_wins()
        {
            top.NodeAt(0).Icon = Icon.Success;
            top.NodeAt(1).Icon = Icon.Failed;
            top.NodeAt(2).Icon = Icon.Pending;
            top.NodeAt(3).Icon = Icon.RunningSuccess;
            top.NodeAt(4).Icon = Icon.RunningFailure;
            top.Icon.ShouldEqual(Icon.RunningFailure);
        }

        [Test]
        public void should_initially_be_unknown()
        {
            top.Icon.ShouldEqual(Icon.Unknown);
        }

        [Test]
        public void update_icon_two_levels_up()
        {
            var veryTop = new TreeNode(new FixtureLibrary());
            veryTop.Add(top);
            veryTop.Add(new TreeNode(new FixtureLibrary()));

            veryTop.NodeAt(1).Icon = Icon.Success;
            top.NodeAt(3).Icon = Icon.Failed;

            veryTop.Icon.ShouldEqual(Icon.Failed);
        }
    }
}