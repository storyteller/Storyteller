using System;
using System.Windows.Input;
using FubuCore;
using StoryTeller.Domain;
using StoryTeller.UserInterface.Actions;
using StoryTeller.UserInterface.Handlers;
using StoryTeller.UserInterface.Screens;
using StoryTeller.UserInterface.Tests.Outline;

namespace StoryTeller.UserInterface.Tests
{
    public class TestScreen : IScreen<Test>, ICloseable
    {
        private readonly ITestPresenter _presenter;
        private readonly Test _test;
        private readonly ITestStateManager _stateManager;
        private readonly ITestScreenCloser _closer;
        private readonly IEditTestController _controller;
        private readonly IOutlineController _outline;
        private readonly ITestView _view;

        public TestScreen(ITestPresenter presenter, ITestView view, Test test, ITestStateManager stateManager, ITestScreenCloser closer, IEditTestController controller, IOutlineController outline)
        {
            _presenter = presenter;
            _view = view;
            _test = test;
            _stateManager = stateManager;
            _closer = closer;
            _controller = controller;
            _outline = outline;

            _stateManager.RegisterListener(_presenter);
        }


        public Test Test { get { return _test; } }

        #region ICloseable Members

        public void AddCanCloseMessages(CloseToken token)
        {
            if (_stateManager.IsDirty())
            {
                string message = "'{0}' has unsaved changes and will be saved on close".ToFormat(_test.Name);
                token.AddMessage(message);
            }
        }

        public void PerformShutdown()
        {
            _presenter.PerformShutdown();
        }

        #endregion

        #region IScreen<Test> Members

        public Test Subject { get { return _test; } }

        public object View { get { return _view; } }

        public string Title { get { return _test.Name; } }

        public void Activate(IScreenObjectRegistry screenObjects)
        {
            screenObjects.Action("Run").Bind(ModifierKeys.Control, Key.D1)
                .To(_controller.RunCommand).Icon = Icon.Run;

            screenObjects.Action("Cancel").Bind(ModifierKeys.Control, Key.D2)
                .To(_controller.CancelCommand).Icon = Icon.Stop;

            screenObjects.Action("Save").Bind(ModifierKeys.Control, Key.S)
                .To(_controller.SaveCommand).Icon = Icon.Save;

            screenObjects.Action("Preview").Bind(ModifierKeys.Control | ModifierKeys.Shift, Key.P).To(
                _presenter.Modes[Mode.Preview]).Icon = Icon.Unknown;

            screenObjects.Action("Results").Bind(ModifierKeys.Control | ModifierKeys.Shift, Key.R).To(
                _presenter.Modes[Mode.Results]).Icon = Icon.Unknown;

            screenObjects.Action("Xml").Bind(ModifierKeys.Control | ModifierKeys.Shift, Key.X).To(
                _presenter.Modes[Mode.Xml]).
                Icon = Icon.Unknown;

            screenObjects.Action("Edit").Bind(ModifierKeys.Control | ModifierKeys.Shift, Key.E).To(
                _presenter.Modes[Mode.Edit])
                .Icon = Icon.Unknown;

            screenObjects.Action("xUnit Harness").Bind(ModifierKeys.Control, Key.H).PublishEvent(
                () => new TestHarnessFileRequested(_test)).Icon = Icon.Unknown;

            screenObjects.Action("Undo").Bind(ModifierKeys.Control, Key.Z).To(_stateManager.Undo).Icon = Icon.Unknown;
            screenObjects.Action("Redo").Bind(ModifierKeys.Control, Key.Y).To(_stateManager.Redo).Icon = Icon.Unknown;

            screenObjects.Action("Go to Top Node").Bind(ModifierKeys.Control, Key.T).To(() =>
            {
                _outline.FocusOnTop();
            }).OnlyKeyboardShortcut();

            // TODO -- replace with the test outline
            screenObjects.PlaceInExplorerPane(_outline.View, "Outline");

            _presenter.Start();
            _outline.Refresh();
        }

        public bool CanClose()
        {
            return _closer.CanClose();
        }

        #endregion

        public void Dispose()
        {
            
        }
    }
}