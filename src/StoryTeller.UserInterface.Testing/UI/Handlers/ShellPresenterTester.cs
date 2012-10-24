using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Handlers;
using StoryTeller.Workspace;

namespace StoryTeller.UserInterface.Testing.UI.Handlers
{
    [TestFixture]
    public class ShellPresenterTester : InteractionContext<ShellPresenter>
    {
        protected override void beforeEach()
        {
        }

        [Test]
        public void respond_to_the_project_loaded_message_by_showing_the_test_tab()
        {
            ClassUnderTest.HandleMessage(new ProjectLoaded(null));
            MockFor<IApplicationShell>().AssertWasCalled(x => x.ShowTestExplorerTree());
        }
    }
}