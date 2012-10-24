using NUnit.Framework;
using StoryTeller.Execution;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Controls;
using StoryTeller.Workspace;

namespace StoryTeller.UserInterface.Testing.UI.Controls
{
    [TestFixture]
    public class when_responding_to_the_project_loaded_event
    {
        private TestStopConditionsView view;
        private TestStopConditions conditions;

        [SetUp]
        public void SetUp()
        {
            view = new TestStopConditionsView();
            conditions = new TestStopConditions();

            view.Conditions = conditions;

            conditions.TimeoutInSeconds = 60;

            view.Handle(new ProjectLoaded(new Project()
            {
                TimeoutInSeconds = 30
            }));

        }

        [Test]
        public void refresh_the_stop_conditions_value_for_timeout_in_seconds()
        {
            conditions.TimeoutInSeconds.ShouldEqual(30);
        }

        [Test]
        public void update_the_view_itself()
        {
            view.Timeout.Text.ShouldEqual("30");
        }
    }
}