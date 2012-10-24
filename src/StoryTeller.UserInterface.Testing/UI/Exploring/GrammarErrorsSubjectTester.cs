using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Exploring;
using StoryTeller.UserInterface.Screens;
using StoryTeller.UserInterface.Testing.UI.Screens;

namespace StoryTeller.UserInterface.Testing.UI.Exploring
{
    [TestFixture]
    public class GrammarErrorsSubjectTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
        }

        #endregion

        [Test]
        public void create_screen_should_build_the_GrammarErrorsView()
        {
            var factory = MockRepository.GenerateMock<IScreenFactory>();
            var theView = new GrammarErrorPresenter(null);
            factory.Expect(x => x.Build<GrammarErrorPresenter>()).Return(theView);

            var subject = new GrammarErrorsSubject();
            subject.CreateScreen(factory).ShouldBeTheSameAs(theView);
        }

        [Test]
        public void only_matches_a_grammar_errors_view()
        {
            var subject = new GrammarErrorsSubject();
            subject.Matches(new StubScreen()).ShouldBeFalse();

            subject.Matches(new GrammarErrorPresenter(null));
        }
    }
}