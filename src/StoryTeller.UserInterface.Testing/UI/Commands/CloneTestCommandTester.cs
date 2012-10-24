using System.Linq;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Commands;
using StoryTeller.UserInterface.Dialogs;

namespace StoryTeller.UserInterface.Testing.UI.Commands
{
    [TestFixture]
    public class when_executing_clone_test : InteractionContext<CloneTestCommand>
    {
        private Test originalTest;
        private Suite suite;

        protected override void beforeEach()
        {
            originalTest = new Test("Original");
            suite = new Suite();
            suite.AddTest(originalTest);

            Services.Inject(originalTest);
        }

        [Test]
        public void executing_launches_the_dialog_with_itself()
        {
            ClassUnderTest.Execute();

            MockFor<IDialogLauncher>().AssertWasCalled(x => x.LaunchForCommand<IAddTestCommand>(ClassUnderTest));
        }
    }


    [TestFixture]
    public class when_creating_a_new_test_by_cloning : InteractionContext<CloneTestCommand>
    {
        private Suite suite;
        private readonly string theTestName = "test 1";
        private Test originalTest;

        // beforeEach is more or less the BDD context.  For you
        // BDD purists, you might call this "theContextIs" or 
        // something similarly silly sounding and pat yourself
        // on the back afterwards
        protected override void beforeEach()
        {
            suite = new Suite("some suite");
            originalTest = new Test("Original");
            originalTest.AddComment("comment 1");
            suite.AddTest(originalTest);

            Services.Inject(originalTest);

            ClassUnderTest.CreateTest(theTestName);
        }

        private Test CreateTest()
        {
            Test test = new Test(theTestName);
            test.SetParent(suite);
            return test;
        }

        [Test]
        public void should_add_the_test_to_the_suite()
        {
            suite.Tests.Length.ShouldEqual(2);
        }

        [Test]
        public void should_clone_the_original_test()
        {
            suite.Tests[1].Parts.First().ShouldBeOfType<Comment>().Text.ShouldEqual("comment 1");
            suite.Tests[1].ShouldNotBeTheSameAs(suite.Tests[0]);
        }

        [Test]
        public void should_raise_a_save_test_message()
        {
            var theExpectedMessage = new SaveTestMessage(CreateTest());
            MockFor<IEventAggregator>().AssertWasCalled(x => x.SendMessage(theExpectedMessage));
        }

        [Test]
        public void should_raise_test_added_message()
        {
            var theExpectedMessage = new TestAddedMessage(CreateTest());
            MockFor<IEventAggregator>().AssertWasCalled(x => x.SendMessage(theExpectedMessage));
        }

        [Test]
        public void should_request_the_new_test_be_opened()
        {
            var theExpectedMessage = new OpenItemMessage(CreateTest());
            MockFor<IEventAggregator>().AssertWasCalled(x => x.SendMessage(theExpectedMessage));
        }

        [Test]
        public void the_test_should_have_the_name_passed_in_from_the_user()
        {
            suite.Tests[1].Name.ShouldEqual(theTestName);
        }
    }
}