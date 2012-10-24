using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Commands;
using StoryTeller.UserInterface.Dialogs;

namespace StoryTeller.UserInterface.Testing.UI.Commands
{
    [TestFixture]
    public class when_executing_the_AddSuite_command : InteractionContext<AddSuiteCommand>
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
            MockFor<IDialogLauncher>().AssertWasCalled(x => x.LaunchForCommand<IAddSuiteCommand>(ClassUnderTest));
        }
    }

    [TestFixture]
    public class when_creating_a_new_suite : InteractionContext<AddSuiteCommand>
    {
        private Suite parent;

        protected override void beforeEach()
        {
            parent = new Suite("parent");
            Services.Inject(parent);

            ClassUnderTest.CreateSuite("NewSuite");
        }

        [Test]
        public void should_create_and_add_the_new_suite_to_the_parent_suite()
        {
            parent.ChildSuites.ShouldHaveTheSameElementsAs(new[] {new Suite("NewSuite")});
        }

        [Test]
        public void should_send_an_add_suite_message()
        {
            MockFor<IEventAggregator>().AssertWasCalled(x => x.SendMessage(new SuiteAddedMessage
            {
                NewSuite = new Suite("NewSuite")
            }));
        }
    }
}