using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Projects;
using StoryTeller.UserInterface.Screens;
using StoryTeller.UserInterface.Tests;
using StoryTeller.Workspace;
using StructureMap;

namespace StoryTeller.UserInterface.Testing.UI.Tests
{
    [TestFixture]
    public class TestScreenSubjectTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
        }

        #endregion

        [Test]
        public void can_create_the_presenter()
        {
            ProjectPersistor.DeleteHistoryFile();
            Bootstrapper.BootstrapShell(false);
            ObjectFactory.Inject<IProject>(new Project());
            var factory = ObjectFactory.GetInstance<IScreenFactory>();

            var theTest = new Test("test1");
            var subject = new ScreenLocator<Test>(theTest);

            subject.CreateScreen(factory)
                .ShouldBeOfType<TestScreen>()
                .Test.ShouldBeTheSameAs(theTest);
        }

        [Test]
        public void matches_on_test()
        {
            var theTest = new Test("test1");
            var otherTest = new Test("test2");

            var subject = new ScreenLocator<Test>(theTest);

            var testView = MockRepository.GenerateMock<ITestView>();

            var modes = new TestMode[] {new PreviewMode(null, null, null)};
            var presenterThatDoesNotMatch = new TestScreen(null, null, otherTest, new TestStateManager(new TestConverter(), otherTest), null, null, null);
            var presenterThatShouldMatch = new TestScreen(null, null, theTest, new TestStateManager(new TestConverter(), theTest), null, null, null);
            var differentTypeOfPresenter = MockRepository.GenerateMock<IScreen>();

            subject.Matches(presenterThatDoesNotMatch).ShouldBeFalse();
            subject.Matches(presenterThatShouldMatch).ShouldBeTrue();
            subject.Matches(differentTypeOfPresenter).ShouldBeFalse();
        }
    }
}