using System;
using System.Windows.Controls;
using StoryTeller.Domain;

namespace StoryTeller.UserInterface.Exploring
{
    public class TestLineControls
    {
        public Button Run { get; set; }
        public Image Icon { get; set; }
        public Label Path { get; set; }
        public Label Status { get; set; }
    }

    public interface ITestLineDriver
    {
        void Update(Icon icon, bool inQueue);
    }

    public class TestLineDriver : ITestLineDriver
    {
        private readonly TestLineControls _controls;
        private readonly Action<Test> _queueAction;
        private readonly Test _test;

        public TestLineDriver(TestLineControls controls, Test test, Action<Test> queueAction)
        {
            _controls = controls;
            _test = test;
            _queueAction = queueAction;

            _controls.Run.Click += (s, e) => _queueAction(_test);
        }

        #region ITestLineDriver Members

        public void Update(Icon icon, bool inQueue)
        {
            _controls.Run.IsEnabled = !inQueue;
            _controls.Path.Content = _test.GetPath().Locator;
            _controls.Status.Content = inQueue ? "Queued" : _test.GetStatus();
            _controls.Icon.SetIcon(icon);
        }

        #endregion
    }
}