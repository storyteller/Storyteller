using System.Windows.Controls;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Model;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Commands;
using StoryTeller.UserInterface.Exploring;
using StoryTeller.UserInterface.Testing.UI.Commands;

namespace StoryTeller.UserInterface.Testing.UI.Exploring
{
    [TestFixture]
    public class ExplorerViewTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            var mocks = new MockRepository();
            shellConductor = mocks.StrictMock<IScreenConductor>();
            locator = MockRepository.GenerateMock<IScreenObjectLocator>();
            view = new ExplorerView(new TreeView(), new TreeView(), shellConductor, locator);
        }

        #endregion

        private ExplorerView view;
        private IScreenConductor shellConductor;
        private IScreenObjectLocator locator;

        [Test]
        public void put_the_fixture_node_in_the_fixture_tree_smoke_test()
        {
            var node = new TreeNode(new FixtureLibrary());
            view.ApplyFixtureNode(node);

            view.FixtureTree.Items[0].ShouldBeTheSameAs(node);
        }

        [Test]
        public void put_the_test_node_in_the_tree_smoke_test()
        {
            var node = new TreeNode(new Hierarchy("some project"));
            view.ApplyProjectNode(node);

            view.TestTree.Items[0].ShouldBeTheSameAs(node);
        }

        [Test]
        public void uses_screenObjectLocator_to_build_up_a_context_menu()
        {
            var hierarchy = new Hierarchy("some project");
            var node = new TreeNode(hierarchy);
            view.ApplyProjectNode(node);


            var nodeActions = new IContextualAction[]
            {
                new StubContextualAction(),
                new StubContextualAction()
            };
            locator.Expect(x => x.BuildActions(node)).Return(nodeActions);

            var hierarchyActions = new IContextualAction[]
            {
                new StubContextualAction(),
                new StubContextualAction()
            };
            locator.Expect(x => x.BuildActions(hierarchy)).Return(hierarchyActions);


            node.InitializeContextMenu();
            node.ContextMenu.Items.Count.ShouldEqual(4);
            node.ContextMenu.Items[0].ShouldBeOfType<ActionMenuItem>().Action.ShouldBeTheSameAs(nodeActions[0]);
            node.ContextMenu.Items[1].ShouldBeOfType<ActionMenuItem>().Action.ShouldBeTheSameAs(nodeActions[1]);
            node.ContextMenu.Items[2].ShouldBeOfType<ActionMenuItem>().Action.ShouldBeTheSameAs(hierarchyActions[0]);
            node.ContextMenu.Items[3].ShouldBeOfType<ActionMenuItem>().Action.ShouldBeTheSameAs(hierarchyActions[1]);
        }
    }

    [TestFixture]
    public abstract class when_running_a_tree_node : InteractionContext<ExplorerView>
    {
        protected TreeNode _node;
        
        protected override void beforeEach()
        {
            _node = GetTestNode();
        }

        protected abstract TreeNode GetTestNode();                      
    }

    [TestFixture]
    public class when_running_a_tree_node_that_is_a_hierarchy : when_running_a_tree_node_that_is_a_suite
    {
        protected override TreeNode GetTestNode()
        {
            return new TreeNode(new Hierarchy(StoryTeller.Testing.DataMother.MathProject()));            
        }
    }

    [TestFixture]
    public class when_running_a_tree_node_that_is_a_suite : when_running_a_tree_node
    {
        private IContextualAction _theAction;
        private IScreenObjectLocator _screenObjectLocator;
        protected override TreeNode GetTestNode() { return new TreeNode(new Suite("fooSuite")); }

        protected override void beforeEach()
        {
            base.beforeEach();
            _screenObjectLocator = MockFor<IScreenObjectLocator>();
            _theAction = MockFor<IContextualAction>();
            _screenObjectLocator.Expect(x => x.CommandForSubject<RunSuiteCommand, Suite>(_node.Subject)).Return(_theAction);
            _theAction.Expect(x => x.Execute());
            ClassUnderTest.RunNode(_node);
        }

        [Test]
        public void should_use_screen_object_locator_to_find_the_action()
        {
            _screenObjectLocator.VerifyAllExpectations();
        }

        [Test]
        public void should_execute_the_action()
        {
            _theAction.VerifyAllExpectations();
        }
    }

    [TestFixture]
    public class when_running_a_tree_node_that_is_a_test : when_running_a_tree_node
    {
        private IContextualAction _theAction;
        private IScreenObjectLocator _screenObjectLocator;
        protected override TreeNode GetTestNode() { return new TreeNode(new Test("someTest")); }

        protected override void beforeEach()
        {
            base.beforeEach();
            _screenObjectLocator = MockFor<IScreenObjectLocator>();
            _theAction = MockFor<IContextualAction>();
            _screenObjectLocator.Expect(x => x.CommandForSubject<RunTestCommand, Test>(_node.Subject)).Return(_theAction);
            _theAction.Expect(x => x.Execute());
            ClassUnderTest.RunNode(_node);
        }

        [Test]
        public void should_use_screen_object_locator_to_find_the_action()
        {
            _screenObjectLocator.VerifyAllExpectations();
        }

        [Test]
        public void should_execute_the_action()
        {
            _theAction.VerifyAllExpectations();
        }
    }
}