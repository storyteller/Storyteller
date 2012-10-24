using System.Collections.Generic;
using System.Linq;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Commands;
using StoryTeller.UserInterface.Exploring;

namespace StoryTeller.UserInterface.Testing.UI.Commands
{
    [TestFixture]
    public class MarkRegressionCommandTester : InteractionContext<MarkRegressionCommand>
    {
        private Hierarchy hierarchy;
        private IEnumerable<Test> tests;

        protected override void beforeEach()
        {
            hierarchy =
                StoryTeller.Testing.DataMother.BuildHierarchy(
                    @"
t1,Success,Acceptance
t2,Failure,Acceptance
t3,Success,Acceptance
s1/t4,Success,Regression
s1/t5,Success,Regression
s1/t6,Failure,Regression
s1/s2/t7,Success,Acceptance
s1/s2/t8,Failure,Acceptance
");

            Services.Inject<Suite>(hierarchy);
            tests = hierarchy.GetAllTests();

            MockFor<ITestExplorer>().Expect(x => x.TestsMatchingFilter(hierarchy)).Return(tests);

            ClassUnderTest.Execute();
        }

        [Test]
        public void should_have_saved_the_changed_tests()
        {
            var service = MockFor<ITestService>();

            service.AssertWasCalled(x => x.Save(tests.First(o => o.Name == "t1")));
            service.AssertWasCalled(x => x.Save(tests.First(o => o.Name == "t2")));
            service.AssertWasCalled(x => x.Save(tests.First(o => o.Name == "t3")));
            service.AssertWasCalled(x => x.Save(tests.First(o => o.Name == "t7")));
            service.AssertWasCalled(x => x.Save(tests.First(o => o.Name == "t8")));
        }

        [Test]
        public void should_have_toggled_the_lifecyle_of_all_regression_tests_to_acceptance()
        {
            tests.Each(x => x.Lifecycle.ShouldEqual(Lifecycle.Regression));
        }

        [Test]
        public void should_reset_the_filter()
        {
            MockFor<ITestExplorer>().AssertWasCalled(x => x.ResetFilter());
        }
    }
}