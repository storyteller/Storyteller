using System.Linq;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Execution;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Controls;
using StoryTeller.UserInterface.Exploring;
using StoryTeller.UserInterface.Running;
using StoryTeller.Workspace;

namespace StoryTeller.UserInterface.Testing.UI.Exploring
{
    [TestFixture]
    public class TreeExplorer_observing_a_test_filter_bar
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
s1/t4,Success,Regression
s1/t5,Success,Regression
s1/t6,Failure,Regression
s1/s2/t7,Success
s1/s2/t8,Failure,Regression
s1/s2/s3/t9,Success
s1/s2/s3/t10,Success
s1/s2/s3/s4/t11,Success
s5/t12,Success
s5/s6/t13,Success
s5/s6/s7/t14,Success
s5/s6/s7/s8/t15,Success
s9/t16,Success,Regression
s9/t17,Unknown
s9/t18,Unknown
");
            events = new NulloEventAggregator();
            view = new StubExplorerView();
            explorer = new TestExplorer(view, events, new TestFilterBar(), new TestFilter(), null);
            explorer.Handle(hierarchy);
        }

        #endregion

        private NulloEventAggregator events;
        private StubExplorerView view;
        private TestExplorer explorer;
        private Hierarchy hierarchy;

        [Test]
        public void handles_the_clear_test_results_message()
        {
            explorer.ResultStatusChanged(ResultStatus.Unknown);

            var spec =
                new TreeNodeSpecification(
                    @"
suite:s9
test:s9/t17
test:s9/t18
");

            spec.AssertMatch(view.TestNode);


            explorer.HandleMessage(new ClearResultsMessage());

            spec =
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
        public void respond_to_new_filter_status()
        {
            explorer.ResultStatusChanged(ResultStatus.Failed);
            var spec =
                new TreeNodeSpecification(
                    @"
suite:s1
suite:s1/s2
test:s1/s2/t8
test:s1/t6
test:t2
");

            spec.AssertMatch(view.TestNode);
        }

        [Test]
        public void respond_to_new_lifecycle()
        {
            explorer.LifecycleChanged(Lifecycle.Regression);

            var spec =
                new TreeNodeSpecification(
                    @"
suite:s1
suite:s1/s2
test:s1/s2/t8
test:s1/t4
test:s1/t5
test:s1/t6
suite:s9
test:s9/t16
");

            spec.AssertMatch(view.TestNode);
        }

        [Test]
        public void run_all_tests_with_filter()
        {
            explorer.LifecycleChanged(Lifecycle.Regression);
            explorer.RunAll();

            var message = events.LastMessage.ShouldBeOfType<ExecuteTestMessage>();
            message.Count().ShouldEqual(5);

            message.ShouldContain(hierarchy.FindTest("s1/s2/t8"));
            message.ShouldContain(hierarchy.FindTest("s1/t4"));
            message.ShouldContain(hierarchy.FindTest("s1/t5"));
            message.ShouldContain(hierarchy.FindTest("s1/t6"));
            message.ShouldContain(hierarchy.FindTest("s9/t16"));
        }

        [Test]
        public void use_the_current_filter_on_a_suite()
        {
            explorer.ResultStatusChanged(ResultStatus.Failed);
            explorer.TestsMatchingFilter(hierarchy).Count().ShouldEqual(3);
        }

        [Test]
        public void when_handling_the_clear_results_message_reset_the_icon_of_each_node_to_unknown()
        {
            var node = SpecificationExtensions.As<TreeNode>(view.TestNode.Items[0]);
            node.Icon = Icon.Success;

            explorer.HandleMessage(new ClearResultsMessage());

            node.Icon.ShouldEqual(Icon.Unknown);
        }
    }
}