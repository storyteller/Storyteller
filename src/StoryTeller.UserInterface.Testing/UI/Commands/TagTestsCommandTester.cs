using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Commands;

namespace StoryTeller.UserInterface.Testing.UI.Commands
{
    [TestFixture]
    public class TagTestsCommandTester : InteractionContext<TagTestsCommand>
    {
        private Suite suite;
        private const string tag = "tagged";
        private const string _FirstTestName = "1";
        private const string _SecondTestName = "2";

        protected override void beforeEach()
        {
            suite = new Suite("some suite");
            suite.AddTest(CreateTest(_FirstTestName));
            suite.AddTest(CreateTest(_SecondTestName));
            Services.Inject(suite);

            ClassUnderTest.TagTests(tag);
        }

        [Test]
        public void should_tag_each_test_in_suite()
        {
            var tests = suite.GetAllTests();
            foreach(Test test in tests)
            {
                Assert.IsTrue(test.GetTags().AllTags.Contains(tag));
            }
        }

        [Test]
        public void should_raise_a_save_test_message()
        {
            var theExpectedMessage = new SaveTestMessage(CreateTest(_FirstTestName));
            MockFor<IEventAggregator>().AssertWasCalled(x => x.SendMessage(theExpectedMessage));
        }

        private Test CreateTest(string testName)
        {
            var test = new Test(testName);
            test.SetParent(suite);
            return test;
        }

    }
}