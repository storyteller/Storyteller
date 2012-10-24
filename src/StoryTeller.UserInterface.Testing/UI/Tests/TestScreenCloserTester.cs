using FubuCore;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Tests;
using Rhino.Mocks;

namespace StoryTeller.UserInterface.Testing.UI.Tests
{

    [TestFixture]
    public class when_closing_the_screen_when_it_is_not_dirty : InteractionContext<TestScreenCloser>
    {
        private bool canClose;
        private Test theTest;

        protected override void beforeEach()
        {
            MockFor<ITestStateManager>().Stub(x => x.IsDirty()).Return(false);
            theTest = new Test("Some test");
            Services.Inject(theTest);

            canClose = ClassUnderTest.CanClose();
        }

        [Test]
        public void should_close_the_screen()
        {
            canClose.ShouldBeTrue();
        }

        [Test]
        public void should_close_without_opening_any_message_box()
        {
            MockFor<IMessageCreator>().AssertWasNotCalled(x => x.AskUser(null, null), x => x.IgnoreArguments());
        }
    }

    [TestFixture]
    public class when_closing_the_screen_when_it_is_dirty : InteractionContext<TestScreenCloser>
    {
        private Test theTest;
        

        protected override void beforeEach()
        {
            MockFor<ITestStateManager>().Stub(x => x.IsDirty()).Return(true);
            theTest = new Test("Some test");
            Services.Inject(theTest);
        }

        [Test]
        public void the_user_decides_to_cancel_the_close()
        {
            MockFor<IMessageCreator>().Expect(
                x =>
                x.AskUserCanCancel("Unsaved Changes",
                                   "Select OK to save changes to {0}, No to discard changes or cancel to continue editing"
                                       .ToFormat(theTest.Name)))
                .Return(UserMessageResponse.Cancel);

            ClassUnderTest.CanClose().ShouldBeFalse();

           
            MockFor<IEditTestController>().AssertWasNotCalled(x => x.SaveChanges());
        }

        [Test]
        public void the_user_decides_to_discard_the_changes()
        {
            MockFor<IMessageCreator>().Expect(
                x =>
                x.AskUserCanCancel("Unsaved Changes",
                                   "Select OK to save changes to {0}, No to discard changes or cancel to continue editing"
                                       .ToFormat(theTest.Name)))
                .Return(UserMessageResponse.No);

            ClassUnderTest.CanClose().ShouldBeTrue();
            MockFor<IEditTestController>().AssertWasNotCalled(x => x.SaveChanges());
        }

        [Test]
        public void the_user_decides_to_save_the_test_and_exit()
        {
            MockFor<IEditTestController>().Expect(x => x.SaveChanges()).Return(true);

            MockFor<IMessageCreator>().Expect(
                x =>
                x.AskUserCanCancel("Unsaved Changes",
                                   "Select OK to save changes to {0}, No to discard changes or cancel to continue editing"
                                       .ToFormat(theTest.Name)))
                .Return(UserMessageResponse.Yes);

            ClassUnderTest.CanClose().ShouldBeTrue();

            MockFor<IEditTestController>().VerifyAllExpectations();
            MockFor<IMessageCreator>().VerifyAllExpectations();
        }
    }

}