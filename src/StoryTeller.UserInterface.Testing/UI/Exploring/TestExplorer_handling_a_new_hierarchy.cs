using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Exploring;

namespace StoryTeller.UserInterface.Testing.UI.Exploring
{

    [TestFixture]
    public class when_responding_to_delete_test_message : InteractionContext<TestExplorer>
    {
        private Hierarchy hierarchy;
        private StubExplorerView view;
        private Test test;

        protected override void beforeEach()
        {
            hierarchy =
                StoryTeller.Testing.DataMother.BuildHierarchy(
                    @"
s1/t4,Success
s1/t5,Success
s1/t6,Failure
s1/s3/t8,Success
s2/t7,Failure
");
            view = new StubExplorerView();
            Services.Inject<IExplorerView>(view);
            Services.Inject<ITestFilter>(new TestFilter());

            ClassUnderTest.Handle(hierarchy);

            test = hierarchy.FindTest("s1/t4");
            test.ShouldNotBeNull();

            ClassUnderTest.Handle(new DeleteTestMessage(test));
        }

        [Test]
        public void should_have_removed_the_matching_test_node_from_the_tree()
        {
            new TreeNodeSpecification(
                @"
suite:s1
suite:s1/s3
test:s1/s3/t8
test:s1/t5
test:s1/t6
suite:s2
test:s2/t7
")
                .AssertMatch(view.TestNode);
        }
    }


    [TestFixture]
    public class when_responding_to_TestAdded_message : InteractionContext<TestExplorer>
    {
        private Hierarchy hierarchy;
        private StubExplorerView view;


        protected override void beforeEach()
        {
            hierarchy =
                StoryTeller.Testing.DataMother.BuildHierarchy(
                    @"
s1/t4,Success
s1/t5,Success
s1/t6,Failure
s1/s3/t8,Success
s2/t7,Failure
");
            view = new StubExplorerView();
            Services.Inject<IExplorerView>(view);
            Services.Inject<ITestFilter>(new TestFilter());

            ClassUnderTest.Handle(hierarchy);
        }

        [Test]
        public void should_add_test_to_the_correct_suite_node()
        {
            Suite suite = hierarchy.FindSuite("s1/s3");
            var test = new Test("new");
            suite.AddTest(test);
            test.Parent.ShouldBeTheSameAs(suite);


            ClassUnderTest.Handle(new TestAddedMessage(test));

            new TreeNodeSpecification(
                @"
suite:s1
suite:s1/s3
test:s1/s3/t8
test:s1/s3/new
test:s1/t4
test:s1/t5
test:s1/t6
suite:s2
test:s2/t7
")
                .AssertMatch(view.TestNode);
        }
    }


    [TestFixture]
    public class handling_suites_with_no_tests
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            hierarchy =
                StoryTeller.Testing.DataMother.BuildHierarchy(
                    @"
t1,Success
t2,Failure
t3,Success
s1/t4,Success
s1/t5,Success
s1/t6,Failure
");

            hierarchy.AddSuite(new Suite("Empty"));

            events = MockRepository.GenerateMock<IEventAggregator>();
            view = new StubExplorerView();
            explorer = new TestExplorer(view, events, null, new TestFilter(), null);
            explorer.Handle(hierarchy);
        }

        #endregion

        private Hierarchy hierarchy;
        private StubExplorerView view;
        private TestExplorer explorer;
        private IEventAggregator events;

        [Test]
        public void the_child_nodes_are_constructed_with_the_empty_suite()
        {
            var spec =
                new TreeNodeSpecification(
                    @"
suite:Empty
suite:s1
test:s1/t4
test:s1/t5
test:s1/t6
test:t1
test:t2
test:t3
");

            spec.AssertMatch(view.TestNode);
        }
    }

    [TestFixture]
    public class handling_a_new_suite
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            hierarchy =
                StoryTeller.Testing.DataMother.BuildHierarchy(
                    @"
t1,Success
t2,Failure
t3,Success
s1/t4,Success
s1/t5,Success
s1/t6,Failure
");
            events = MockRepository.GenerateMock<IEventAggregator>();
            view = new StubExplorerView();
            explorer = new TestExplorer(view, events, null, new TestFilter(), null);
            explorer.Handle(hierarchy);


            var suite = new Suite("NewSuite");
            hierarchy.FindSuite("s1").AddSuite(suite);

            explorer.HandleMessage(new SuiteAddedMessage
            {
                NewSuite = suite
            });
        }

        #endregion

        private Hierarchy hierarchy;
        private StubExplorerView view;
        private TestExplorer explorer;
        private IEventAggregator events;

        [Test]
        public void the_new_suite_node_should_be_show_under_its_parent()
        {
            var spec =
                new TreeNodeSpecification(
                    @"
suite:s1
test:s1/t4
test:s1/t5
test:s1/t6
suite:s1/NewSuite
test:t1
test:t2
test:t3
");

            spec.AssertMatch(view.TestNode);
        }
    }

    [TestFixture]
    public class TestExplorer_handling_a_new_hierarchy
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            hierarchy =
                StoryTeller.Testing.DataMother.BuildHierarchy(
                    @"
t1,Success
t2,Failure
t3,Success
s1/t4,Success
s1/t5,Success
s1/t6,Failure
s1/s2/t7,Success
s1/s2/t8,Failure
s1/s2/s3/t9,Success
s1/s2/s3/t10,Success
s1/s2/s3/s4/t11,Success
s5/t12,Success
s5/s6/t13,Success
s5/s6/s7/t14,Success
s5/s6/s7/s8/t15,Success
s9/t16,Success
s9/t17,Success
s9/t18,Success
");
            events = MockRepository.GenerateMock<IEventAggregator>();
            view = new StubExplorerView();
            explorer = new TestExplorer(view, events, null, new TestFilter(), null);
            explorer.Handle(hierarchy);
        }

        #endregion

        private Hierarchy hierarchy;
        private StubExplorerView view;
        private TestExplorer explorer;
        private IEventAggregator events;

        [Test]
        public void should_store_the_suite_node_for_hierarchy()
        {
            explorer.NodeFor(hierarchy).ShouldNotBeNull();
        }

        [Test]
        public void the_child_nodes_are_constructed()
        {
            var spec =
                new TreeNodeSpecification(
                    @"
suite:s1
suite:s1/s2
suite:s1/s2/s3
suite:s1/s2/s3/s4
test:s1/s2/s3/s4/t11
test:s1/s2/s3/t9
test:s1/s2/s3/t10
test:s1/s2/t7
test:s1/s2/t8
test:s1/t4
test:s1/t5
test:s1/t6
suite:s5
suite:s5/s6
suite:s5/s6/s7
suite:s5/s6/s7/s8
test:s5/s6/s7/s8/t15
test:s5/s6/s7/t14
test:s5/s6/t13
test:s5/t12
suite:s9
test:s9/t16
test:s9/t17
test:s9/t18
test:t1
test:t2
test:t3
");

            spec.AssertMatch(view.TestNode);
        }

        [Test]
        public void the_explorer_should_pass_the_view_a_new_tree_node_for_the_hierarchy()
        {
            view.TestNode.ShouldNotBeNull();
            view.TestNode.Subject.ShouldBeTheSameAs(hierarchy);
        }
    }

    public class StubExplorerView : IExplorerView
    {
        public TreeNode TestNode { get; set; }
        public TreeNode FixtureNode { get; set; }

        #region IExplorerView Members

        public void ApplyProjectNode(TreeNode node)
        {
            TestNode = node;
        }

        public void ApplyFixtureNode(TreeNode node)
        {
            FixtureNode = node;
        }

        #endregion
    }


    [TestFixture]
    public class when_responding_to_a_test_renamed : InteractionContext<TestExplorer>
    {
        private Hierarchy hierarchy;
        private StubExplorerView view;
        private Test test;

        protected override void beforeEach()
        {
            hierarchy =
                StoryTeller.Testing.DataMother.BuildHierarchy(
                    @"
s1/t4,Success
s1/t5,Success
s1/t6,Failure
s1/s3/t8,Success
s2/t7,Failure
");
            view = new StubExplorerView();
            Services.Inject<IExplorerView>(view);
            Services.Inject<ITestFilter>(new TestFilter());

            ClassUnderTest.Handle(hierarchy);

            test = hierarchy.FindTest("s1/t5");
            test.Name = "New Name";
            ClassUnderTest.Handle(new TestRenamed
            {
                Test = test
            });
        }

        [Test]
        public void should_reset_the_text_of_the_tree_node()
        {
            new TreeNodeSpecification(
                @"
suite:s1
suite:s1/s3
test:s1/s3/t8
test:s1/t4
test:s1/New Name
test:s1/t6
suite:s2
test:s2/t7
")
                .AssertMatch(view.TestNode);
        }
    }
}