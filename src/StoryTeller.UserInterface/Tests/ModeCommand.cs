using StoryTeller.Domain;
using StoryTeller.UserInterface.Actions;

namespace StoryTeller.UserInterface.Tests
{
    public class ModeCommand : ActionCommand
    {
        private readonly TestMode _mode;
        private readonly Test _test;

        public ModeCommand(TestMode mode, TestPresenter presenter, Test test, ITestView view)
            : base(() =>
            {
                presenter.EnableMode(mode);
                mode.Refresh();
                view.PlaceInMainPane(mode.ContentView);
            })
        {
            _test = test;
            _mode = mode;
        }

        public TestMode Mode { get { return _mode; } }
        public object ContentView { get { return _mode.ContentView; } }


        public void Enable(ModeCommand active)
        {
            Enabled = ReferenceEquals(this, active) ? false : _mode.IsEnabled(_test);
        }
    }
}