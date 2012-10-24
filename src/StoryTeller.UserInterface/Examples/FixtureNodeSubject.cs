using StoryTeller.Model;
using StoryTeller.UserInterface.Screens;

namespace StoryTeller.UserInterface.Examples
{
    public class FixtureNodeSubject : ScreenSubject<IFixtureNode, FixtureNodePresenter>
    {
        private readonly IFixtureNode _subject;

        public FixtureNodeSubject(IFixtureNode subject)
        {
            _subject = subject;
        }

        public IFixtureNode Subject { get { return _subject; } }

        protected override bool matches(FixtureNodePresenter screen)
        {
            return _subject.Equals(screen.Subject);
        }

        public override IScreen CreateScreen(IScreenFactory factory)
        {
            return factory.Build(_subject);
        }
    }
}