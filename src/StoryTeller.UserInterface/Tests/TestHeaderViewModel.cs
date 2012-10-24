using StoryTeller.Domain;
using StoryTeller.Execution;

namespace StoryTeller.UserInterface.Tests
{
    public interface ITestHeaderView
    {
        void Refresh();
    }

    public interface ITestHeaderViewModel
    {
        void Update();
    }

    public class TestHeaderViewModel : ITestHeaderViewModel, IListener<BinaryRecycleFinished>, IListener<TestRenamed>
    {
        private readonly ITestService _service;
        private readonly Test _test;
        private readonly ITestHeaderView _view;

        public TestHeaderViewModel(Test test, ITestService service, ITestHeaderView view)
        {
            _test = test;
            _service = service;
            _view = view;
        }

        public string Status { get; set; }

        public string Path
        {
            get { return _test.Parent == null ? string.Empty : _test.Parent.GetPath().Locator.GetLabelTextWithoutHotkey() + "/" + _test.Name.GetLabelTextWithoutHotkey(); }
        }

        public int NumberOfRetries
        {
            get { return _test.NumberOfRetries; }
            set { _test.NumberOfRetries = value; }
        }

        public string Name
        {
            get { return _test.Name; }
            set
            {
                if (value != _test.Name)
                {
                    _service.RenameTest(_test, value);
                }
            }
        }

        public string Lifecycle
        {
            get { return _test.Lifecycle.ToString(); }
        }

        public bool AutoRun { get; set; }

        #region ITestHeaderViewModel Members

        public void Update()
        {
            TestState status = _service.GetStatus(_test);

            Status = determineStatus(status);
        }

        #endregion

        public void ToggleLifecycle()
        {
            _test.Toggle();
            _service.Save(_test);
            _view.Refresh();
        }

        private string determineStatus(TestState status)
        {
            switch (status)
            {
                case TestState.Executing:
                    return "Executing";

                case TestState.Queued:
                    return "Queued";

                default:
                    return _test.HasResult() ? _test.GetStatus() : string.Empty;
            }
        }

        public void Handle(BinaryRecycleFinished message)
        {
            if (AutoRun)
            {
                _service.QueueTest(_test);
            }
        }

        public void Handle(TestRenamed message)
        {
            if (message.Test.Equals(_test))
            {
                _view.Refresh();
            }
        }
    }
}