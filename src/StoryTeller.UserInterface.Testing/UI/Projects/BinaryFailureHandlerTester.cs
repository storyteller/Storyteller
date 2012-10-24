using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Execution;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Dialogs;
using StoryTeller.UserInterface.Projects;
using StoryTeller.Workspace;

namespace StoryTeller.UserInterface.Testing.UI.Projects
{
    [TestFixture]
    public class when_handling_the_recycle_message : InteractionContext<BinaryFailureHandler>
    {
        private BinaryRecycleFailure message;

        protected override void beforeEach()
        {
            message = new BinaryRecycleFailure
            {
                ErrorMessage = "Bad Error!"
            };

            ClassUnderTest.HandleMessage(message);
        }

        [Test]
        public void should_launch_a_dialog_with_itself()
        {
            MockFor<IDialogLauncher>().AssertWasCalled(x => x.LaunchForCommand<IBinaryFailureHandler>(ClassUnderTest));
        }

        [Test]
        public void should_store_the_message()
        {
            ClassUnderTest.ErrorText.ShouldEqual(message.ErrorMessage);
        }
    }

    [TestFixture]
    public class retry_will_attempt_to_recycle_the_binaries : InteractionContext<BinaryFailureHandler>
    {
        protected override void beforeEach()
        {
            ClassUnderTest.Retry();
        }

        [Test]
        public void should_send_the_recycle_binaries_request()
        {
            MockFor<IEventAggregator>().AssertWasCalled(x => x.SendMessage<ForceBinaryRecycle>());
        }
    }
}