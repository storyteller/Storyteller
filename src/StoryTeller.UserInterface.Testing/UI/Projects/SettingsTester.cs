using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Projects;

namespace StoryTeller.UserInterface.Testing.UI.Projects
{
    [TestFixture]
    public class SettingsTester : InteractionContext<Settings>
    {
        [Test]
        public void clicking_new_project_should_call_create_new_project_on_the_controller()
        {
            ClassUnderTest.Controller = MockFor<IProjectController>();
            ControlDriver.FireEvent(ClassUnderTest.NewProject, "Click");
            MockFor<IProjectController>().AssertWasCalled(x => x.CreateNewProject());
        }

        [Test]
        public void clicking_on_load_an_existing_project_should_call_load_existing_project_on_the_controller()
        {
            ClassUnderTest.Controller = MockFor<IProjectController>();
            ControlDriver.FireEvent(ClassUnderTest.LoadProject, "Click");
            MockFor<IProjectController>().AssertWasCalled(x=> x.LoadExistingProject());
        }
    }
}