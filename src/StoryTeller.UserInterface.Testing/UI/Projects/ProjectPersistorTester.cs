using NUnit.Framework;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Projects;
using StoryTeller.Workspace;

namespace StoryTeller.UserInterface.Testing.UI.Projects
{
    [TestFixture]
    public class when_loading_the_history
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            ProjectPersistor.DeleteHistoryFile();

            persistor = new ProjectPersistor();
        }

        #endregion

        private ProjectPersistor persistor;

        [Test]
        public void gracefully_handles_a_malformed_project_history_file()
        {
            new FileSystem().WriteStringToFile("some junk that will never be deserialized to a ProjectHistory",
                                               ProjectPersistor.HISTORY_FILE);

            IProjectHistory history = persistor.LoadHistory();

            history.ShouldNotBeNull();
            history.Projects.Length.ShouldEqual(0);
        }

        [Test]
        public void gracefully_return_a_blank_history_if_the_history_does_not_exist()
        {
            IProjectHistory history = persistor.LoadHistory();

            history.ShouldNotBeNull();
            history.Projects.Length.ShouldEqual(0);
        }

        [Test]
        public void save_and_load_history()
        {
            var history = new ProjectHistory();
            var theLastProject = new ProjectToken
            {
                Filename = "something",
                Name = "else"
            };
            history.Store(theLastProject);

            persistor.SaveHistory(history);

            IProjectHistory history2 = persistor.LoadHistory();

            history2.LastAccessed.ShouldEqual(theLastProject);
        }
    }
}