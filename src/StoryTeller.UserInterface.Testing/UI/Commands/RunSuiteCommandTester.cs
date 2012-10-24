using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Commands;
using StoryTeller.UserInterface.Exploring;

namespace StoryTeller.UserInterface.Testing.UI.Commands
{
    [TestFixture]
    public class RunSuiteCommandTester : InteractionContext<RunSuiteCommand>
    {
        private Hierarchy suite;

        protected override void beforeEach()
        {
            suite = StoryTeller.Testing.DataMother.BuildHierarchy(@"
t1,Success
t2,Success
t3,Success
s1/t4,Success
");

            Services.Inject<Suite>(suite);

            MockFor<ITestExplorer>().Expect(x => x.TestsMatchingFilter(suite)).Return(suite.GetAllTests());

            ClassUnderTest.Execute();
        }

        [Test]
        public void executing_the_command_queues_all_the_tests()
        {
            var service = MockFor<ITestService>();


            service.AssertWasCalled(x => x.QueueTest(suite.FindTest("t1")));
            service.AssertWasCalled(x => x.QueueTest(suite.FindTest("t2")));
            service.AssertWasCalled(x => x.QueueTest(suite.FindTest("t3")));
            service.AssertWasCalled(x => x.QueueTest(suite.FindTest("s1/t4")));
        }

        [Test]
        public void should_filter_the_tests_against_the_current_filter()
        {
            MockFor<ITestExplorer>().VerifyAllExpectations();
        }
    }
}