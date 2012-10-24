using StoryTeller.Execution;
using StoryTeller.Model;
using StoryTeller.UserInterface.Actions;
using StoryTeller.UserInterface.Screens;

namespace StoryTeller.UserInterface.Examples
{
    public class FixtureNodePresenter : IScreen<IFixtureNode>, IListener<BinaryRecycleFinished>
    {
        private readonly IFixtureNode _subject;
        private readonly IFixtureNodeView _view;

        public FixtureNodePresenter(IFixtureNodeView view, IFixtureNode subject)
        {
            _view = view;
            _subject = subject;
        }


        #region IListener<BinaryRecycleFinished> Members

        public void Handle(BinaryRecycleFinished message)
        {
        }

        #endregion

        #region IScreen<IFixtureNode> Members

        public IFixtureNode Subject { get { return _subject; } }

        public object View { get { return _view; } }

        public string Title { get { return "Something"; } }

        public void Activate(IScreenObjectRegistry screenObjects)
        {
        }

        public bool CanClose()
        {
            return true;
        }

        public void Dispose()
        {
        }

        #endregion


    }
}