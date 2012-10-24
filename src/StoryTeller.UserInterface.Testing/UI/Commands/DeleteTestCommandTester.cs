using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Commands;

namespace StoryTeller.UserInterface.Testing.UI.Commands
{
    [TestFixture]
    public class when_deleting_a_test_and_the_user_cancels_the_delete : InteractionContext<DeleteTestCommand>
    {
        private Test theTest;

        protected override void beforeEach()
        {
            theTest = new Test("a");
            Services.Inject(theTest);

            MockFor<IMessageCreator>().Expect(
                x => x.AskUser(DeleteTestCommand.DIALOG_TITLE, DeleteTestCommand.DIALOG_MESSAGE)).Return(UserMessageResponse.No);

            ClassUnderTest.Execute();
        }

        [Test]
        public void should_ask_the_user_if_they_wish_to_delete_the_test()
        {
            MockFor<IMessageCreator>().VerifyAllExpectations();
        }

        [Test]
        public void should_not_delete_the_test()
        {
            MockFor<ITestService>().AssertWasNotCalled(x => x.DeleteTest(theTest));
        }
    }

    [TestFixture]
    public class when_deleting_a_test_and_the_user_accepts_the_delete : InteractionContext<DeleteTestCommand>
    {
        private Test theTest;

        protected override void beforeEach()
        {
            theTest = new Test("a");
            Services.Inject(theTest);

            MockFor<IMessageCreator>().Expect(
                x => x.AskUser(DeleteTestCommand.DIALOG_TITLE, DeleteTestCommand.DIALOG_MESSAGE)).Return(UserMessageResponse.Yes);

            ClassUnderTest.Execute();
        }


        [Test]
        public void should_ask_the_user_if_they_wish_to_delete_the_test()
        {
            MockFor<IMessageCreator>().VerifyAllExpectations();
        }

        [Test]
        public void should_delete_the_test()
        {
            MockFor<ITestService>().AssertWasCalled(x => x.DeleteTest(theTest));
        }
    }
}