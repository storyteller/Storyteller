using FubuCore.Util;
using StoryTeller.Domain;
using StoryTeller.UserInterface.Actions;
using StoryTeller.UserInterface.Screens;

namespace StoryTeller.UserInterface.Exploring
{
    public class SuitePresenter : IListener<TestIconChanged>, ISuitePresenter, IListener<TestAddedMessage>,
                                  IScreen<Hierarchy>
    {
        private readonly Cache<Test, ITestLineDriver> _drivers;
        private readonly ITestExplorer _explorer;
        private readonly ITestService _service;
        private readonly Suite _subject;
        private readonly ISuiteView _view;

        public SuitePresenter(Suite suite, ISuiteView view, ITestExplorer explorer, ITestService service)
        {
            _subject = suite;
            _view = view;
            _explorer = explorer;
            _service = service;

            _view.Presenter = this;
            _drivers = new Cache<Test, ITestLineDriver>(t => _view.AddTest(t, queueTest));
        }

        #region IListener<TestAddedMessage> Members

        public void Handle(TestAddedMessage message)
        {
            if (_subject.Contains(message.Test))
            {
                AddTest(message.Test);
            }
        }

        #endregion

        #region IListener<TestIconChanged> Members

        public void Handle(TestIconChanged message)
        {
            Test test = message.Test;
            if (!_drivers.Has(test)) return;

            bool isQueued = this.isQueued(test);
            _drivers[test].Update(message.Icon, isQueued);
        }

        #endregion

        #region IScreen<Hierarchy> Members

        Hierarchy IScreen<Hierarchy>.Subject { get { return _subject as Hierarchy; } }

        #endregion

        #region ISuitePresenter Members

        public Suite Subject { get { return _subject; } }

        public void RunAll()
        {
            _drivers.Each((t, d) => _service.QueueTest(t));
        }

        public object View { get { return _view; } }

        public string Title { get { return _subject.ToString(); } }

        public void Activate(IScreenObjectRegistry screenObjects)
        {
            _view.ClearAll();
            _drivers.ClearAll();
            foreach (Test test in _subject.GetAllTests())
            {
                AddTest(test);
            }
        }

        public bool CanClose()
        {
            return true;
        }

        public void Dispose()
        {
        }

        #endregion

        private bool isQueued(Test test)
        {
            return _service.GetStatus(test) != TestState.NotQueued;
        }

        public virtual void AddTest(Test test)
        {
            bool inQueue = isQueued(test);
            Icon icon = _explorer.IconFor(test);
            _drivers[test].Update(icon, inQueue);
        }

        private void queueTest(Test test)
        {
            _service.QueueTest(test);
        }
    }
}