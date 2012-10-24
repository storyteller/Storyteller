using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Testing;

namespace StoryTeller.UserInterface.Testing.UI.Running
{
    [TestFixture]
    public class TestRunEventTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
        }

        #endregion

        [Test]
        public void executing_is_running()
        {
            new TestRunEvent(new Test("test1"), TestState.Executing).IsRunning.ShouldBeTrue();
        }

        [Test]
        public void not_queued_is_not_running()
        {
            new TestRunEvent(new Test("test1"), TestState.NotQueued).IsRunning.ShouldBeFalse();
        }

        [Test]
        public void queued_is_running()
        {
            new TestRunEvent(new Test("test1"), TestState.Queued).IsRunning.ShouldBeTrue();
        }
    }
}