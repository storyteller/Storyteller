using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Commands;

namespace StoryTeller.UserInterface.Testing.UI.Commands
{
    [TestFixture]
    public class RunTestCommandTester : InteractionContext<RunTestCommand>
    {
        private Test theTest;

        protected override void beforeEach()
        {
            theTest = StoryTeller.Testing.DataMother.TestWithNoResults();
            Services.Inject(theTest);
        }

        [Test]
        public void command_is_disabled_if_the_test_is_currently_executing()
        {
            MockFor<ITestService>().Expect(x => x.GetStatus(theTest)).Return(TestState.Executing);
            ClassUnderTest.Enabled.ShouldBeFalse();
        }

        [Test]
        public void command_is_disabled_if_the_test_is_currently_in_the_queue()
        {
            MockFor<ITestService>().Expect(x => x.GetStatus(theTest)).Return(TestState.Queued);
            ClassUnderTest.Enabled.ShouldBeFalse();
        }

        [Test]
        public void command_is_enabled_if_the_test_is_not_in_the_queue()
        {
            MockFor<ITestService>().Expect(x => x.GetStatus(theTest)).Return(TestState.NotQueued);
            ClassUnderTest.Enabled.ShouldBeTrue();
        }

        [Test]
        public void executing_the_command_simply_queues_the_test()
        {
            ClassUnderTest.Execute();
            MockFor<ITestService>().AssertWasCalled(x => x.QueueTest(theTest));
        }
    }
}