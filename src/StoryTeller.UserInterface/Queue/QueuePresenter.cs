using System.Collections.Generic;
using System.Windows.Input;
using FubuCore.Util;
using StoryTeller.Domain;
using StoryTeller.UserInterface.Actions;
using StoryTeller.UserInterface.Running;
using StoryTeller.UserInterface.Screens;

namespace StoryTeller.UserInterface.Queue
{
    public interface IQueueView
    {
        bool NoTestsAreQueued { set; }
        QueuePresenter Presenter { set; }

        void AddTestItem(object item);
        void RemoveTestItem(object item);
        void HideCurrentTest();
        void DisplayCurrentTest();
    }

    public class QueuePresenter : IScreen, IListener<TestRunEvent>
    {
        private readonly Cache<Test, object> _items = new Cache<Test, object>();
        private readonly IExecutionQueue _queue;
        private readonly IQueueView _view;

        public QueuePresenter(IQueueView view, IExecutionQueue queue, IQueuedItemFactory factory)
        {
            _queue = queue;
            _view = view;

            _items.OnMissing = factory.Build;
        }

        #region IListener<TestRunEvent> Members

        public void Handle(TestRunEvent message)
        {
            switch (message.State)
            {
                case TestState.Queued:
                    queueTest(message.Test);
                    break;

                case TestState.Executing:
                    startTest(message.Test);
                    break;

                case TestState.NotQueued:
                    if (message.Completed)
                    {
                        _view.HideCurrentTest();
                    }
                    removeTest(message.Test);
                    break;
            }
        }

        #endregion

        #region IScreen Members

        public object View { get { return _view; } }

        public string Title { get { return "Execution Queue"; } }

        public void Activate(IScreenObjectRegistry screenObjects)
        {
            _view.Presenter = this;

            if (_queue.IsExecuting())
            {
                _view.DisplayCurrentTest();
            }
            else
            {
                _view.HideCurrentTest();
            }

            _queue.GetAllQueuedTests().Each(queueTest);
            determineIfAnyTestsAreQueued();


            screenObjects.Action("Clear All").Bind(ModifierKeys.Control | ModifierKeys.Shift, Key.Q).To(ClearQueue).Icon
                = Icon.Stop;
        }

        public bool CanClose()
        {
            return true;
        }

        public void Dispose()
        {
        }

        #endregion

        private void queueTest(Test test)
        {
            determineIfAnyTestsAreQueued();
            _view.AddTestItem(_items[test]);
        }

        private void startTest(Test test)
        {
            _view.DisplayCurrentTest();
            removeTest(test);
        }


        private void determineIfAnyTestsAreQueued()
        {
            _view.NoTestsAreQueued = _queue.IsEmpty();
        }

        private void removeTest(Test test)
        {
            _view.RemoveTestItem(_items[test]);
            _items.Remove(test);

            determineIfAnyTestsAreQueued();
        }

        public void AbortCurrentTest()
        {
            _view.HideCurrentTest();
            _queue.AbortCurrentTest();
        }

        public void ClearQueue()
        {
            _queue.CancelAll();
            _queue.AbortCurrentTest();
        }
    }
}