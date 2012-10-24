using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Tests;

namespace StoryTeller.UserInterface.Testing.UI.Tests
{
    [TestFixture]
    public class when_trying_to_close_the_application_and_the_screen_is_dirty : InteractionContext<TestScreen>
    {
        private CloseToken _token;
        private Test theTest;

        protected override void beforeEach()
        {
            theTest = new Test("The Test");
            Services.Inject(theTest);

            MockFor<ITestStateManager>().Expect(x => x.IsDirty()).Return(true);

            _token = new CloseToken();
            ClassUnderTest.AddCanCloseMessages(_token);
        }

        [Test]
        public void should_register_a_message_with_the_close_token()
        {
            _token.Messages.ShouldContain("'The Test' has unsaved changes and will be saved on close");
        }
    }

    [TestFixture]
    public class when_adding_close_messages_and_the_screen_is_not_dirty : InteractionContext<TestScreen>
    {
        private CloseToken _token;
        private Test theTest;

        protected override void beforeEach()
        {
            theTest = new Test("The Test");
            Services.Inject(theTest);

            MockFor<ITestStateManager>().Expect(x => x.IsDirty()).Return(false);

            _token = new CloseToken();
            ClassUnderTest.AddCanCloseMessages(_token);
        }

        [Test]
        public void there_should_be_no_messages_on_the_close_token()
        {
            _token.Messages.Length.ShouldEqual(0);
        }
    }
}