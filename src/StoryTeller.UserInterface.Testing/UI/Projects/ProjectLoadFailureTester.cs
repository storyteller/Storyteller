using NUnit.Framework;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Projects;
using Rhino.Mocks;

namespace StoryTeller.UserInterface.Testing.UI.Projects
{
    [TestFixture]
    public class ProjectLoadFailureTester : InteractionContext<ProjectLoadFailure>
    {
        private ProjectToken _projectToken;

        protected override void beforeEach()
        {
            _projectToken = new ProjectToken 
            {
                Filename = "somefilename",
                Name = "somename"
            };
        }

        [Test]
        public void clicking_yes_should_raise_a_remove_project_from_history_event_with_a_message_based_on_the_project_token()
        {
            MockFor<IProjectLoadFailureHandler>().Expect(x => x.ProjectToken).Return(_projectToken);
            ControlDriver.FireEvent(ClassUnderTest.Yes, "Click");
            MockFor<IEventAggregator>().AssertWasCalled(x => x.SendMessage(new RemoveProjectFromHistoryMessage 
            {
                ProjectToken = _projectToken
            }));
            MockFor<IProjectLoadFailureHandler>().VerifyAllExpectations();
        }

        [Test]
        public void clicking_no_should_not_raise_a_remove_project_from_history_event()
        {
            ControlDriver.FireEvent(ClassUnderTest.No, "Click");
            MockFor<IEventAggregator>().AssertWasNotCalled(x=> x.SendMessage((ProjectToken)null), x=> x.IgnoreArguments());
            
        }
    }
}