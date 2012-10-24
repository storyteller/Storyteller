using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Commands;
using StoryTeller.UserInterface.Dialogs;

namespace StoryTeller.UserInterface.Testing.UI.Commands
{
    [TestFixture]
    public class when_executing_the_command : InteractionContext<AddTestCommand>
    {
        private Suite suite;

        protected override void beforeEach()
        {
            suite = new Suite("some suite");
            Services.Inject(suite);

            ClassUnderTest.Execute();
        }

        [Test]
        public void should_launch_a_dialog_with_itself()
        {
            MockFor<IDialogLauncher>().AssertWasCalled(x => x.LaunchForCommand<IAddTestCommand>(ClassUnderTest));
        }
    }

    [TestFixture]
    public class when_creating_a_new_test : InteractionContext<AddTestCommand>
    {
        private Suite suite;
        private readonly string theTestName = "test 1";

        // beforeEach is more or less the BDD context.  For you
        // BDD purists, you might call this "theContextIs" or 
        // something similarly silly sounding and pat yourself
        // on the back afterwards
        protected override void beforeEach()
        {
            suite = new Suite("some suite");
            Services.Inject(suite);

            ClassUnderTest.CreateTest(theTestName);
        }

        [Test]
        public void should_add_the_test_to_the_suite()
        {
            suite.Tests.Length.ShouldEqual(1);
        }

        [Test]
        public void should_raise_a_save_test_message()
        {
            var theExpectedMessage = new SaveTestMessage(CreateTest());
            MockFor<IEventAggregator>().AssertWasCalled(x => x.SendMessage(theExpectedMessage));
        }

        private Test CreateTest()
        {
            var test = new Test(theTestName);
            test.SetParent(suite);
            return test;
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
            suite.Tests[0].Name.ShouldEqual(theTestName);
        }
    }
}