using NUnit.Framework;
using Rhino.Mocks;
using ShadeTree.Validation;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Actions;
using StoryTeller.UserInterface.Projects;
using StoryTeller.Workspace;

namespace StoryTeller.UserInterface.Testing.UI.Projects
{
    [TestFixture]
    public class when_activating_a_new_project_screen_for_the_first_time : InteractionContext<NewProjectPresenter>
    {
        private IScreenObjectRegistry screenObjectRegistry;

        protected override void beforeEach()
        {
            screenObjectRegistry = Services.Container.GetInstance<ScreenObjectRegistry>();
            ClassUnderTest.Activate(screenObjectRegistry);
        }

        [Test]
        public void should_bind_the_view_to_the_new_project()
        {
            MockFor<IProjectScreen>().AssertWasCalled(x => x.BindTo(ClassUnderTest.Project));
        }
    }


    [TestFixture]
    public class when_cancelling_the_new_project : InteractionContext<NewProjectPresenter>
    {
        protected override void beforeEach()
        {
            ClassUnderTest.Cancel.Execute(null);
        }

        [Test]
        public void can_close_should_always_be_true()
        {
            ClassUnderTest.CanClose().ShouldBeTrue();
        }

        [Test]
        public void should_close_the_screen()
        {
            MockFor<IScreenConductor>().AssertWasCalled(x => x.Close(ClassUnderTest));
        }
    }

    [TestFixture]
    public class when_saving_an_invalid_project : InteractionContext<NewProjectPresenter>
    {
        private ProjectValidationMessages notification;

        protected override void beforeEach()
        {
            notification = new ProjectValidationMessages();
            notification.Messages.Add("some bad message");

            MockFor<IProjectValidator>().Expect(x => x.Validate(ClassUnderTest.Project)).Return(notification);

            ClassUnderTest.Save.Execute(null);
        }

        [Test]
        public void should_not_close_the_screen()
        {
            MockFor<IScreenConductor>().AssertWasNotCalled(x => x.Close(ClassUnderTest));
        }

        [Test]
        public void should_not_load_the_new_project()
        {
            MockFor<IProjectController>().AssertWasNotCalled(x => x.StartNewProject(ClassUnderTest.Project));
        }

        [Test]
        public void should_set_the_notification_messages_on_the_view()
        {
            MockFor<IProjectScreen>().ShowErrorMessages(notification);
        }
    }


    [TestFixture]
    public class when_saving_a_valid_project : InteractionContext<NewProjectPresenter>
    {
        private Notification notification;

        protected override void beforeEach()
        {
            MockFor<IProjectValidator>().Expect(x => x.Validate(ClassUnderTest.Project)).Return(new ProjectValidationMessages());

            ClassUnderTest.Save.Execute(null);
        }

        [Test]
        public void should_close_the_screen()
        {
            MockFor<IScreenConductor>().AssertWasCalled(x => x.Close(ClassUnderTest));
        }

        [Test]
        public void should_load_the_new_project()
        {
            MockFor<IProjectController>().AssertWasCalled(x => x.StartNewProject(ClassUnderTest.Project));
        }
    }
}