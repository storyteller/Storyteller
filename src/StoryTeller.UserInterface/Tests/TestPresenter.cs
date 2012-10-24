using System;
using System.Collections.Generic;
using StoryTeller.Domain;
using StoryTeller.Execution;
using StoryTeller.Workspace;

namespace StoryTeller.UserInterface.Tests
{
    public interface ITestPresenter : ITestStateListener
    {
        IReadOnlyDictionary<Mode, ModeCommand> Modes { get; }
        void PerformShutdown();
        void Start();
        bool ApplyChanges();
    }

    public class TestPresenter : IListener<ClearResultsMessage>, ITestPresenter, IListener<TestRunEvent>,
                                 IListener<BinaryRecycleFinished>, IListener<TestRenamed>
    {
        private readonly ITestHeaderViewModel _header;
        private readonly IDictionary<Mode, ModeCommand> _modes = new Dictionary<Mode, ModeCommand>();

        private readonly Test _test;
        private readonly ITestView _view;
        private ModeCommand _currentMode;


        public TestPresenter(Test test, ITestView view, TestMode[] modes, ITestHeaderViewModel header)
        {
            _test = test;
            _view = view;
            _header = header;

            modes.Each(m => _modes.Add(m.Mode, new ModeCommand(m, this, test, view)));

            _currentMode = _modes[Mode.Preview];
        }

        public Test Test { get { return _test; } }

        public virtual TestMode CurrentMode { get { return _currentMode.Mode; } }

        #region IListener<BinaryRecycleFinished> Members

        public void Handle(BinaryRecycleFinished message)
        {
            _currentMode.Mode.Refresh();
        }

        #endregion

        #region IListener<ClearResultsMessage> Members

        public void Handle(ClearResultsMessage message)
        {
            _test.Reset();
            if (CurrentMode.Mode == Mode.Results)
            {
                ChangeModeTo(Mode.Preview);
            }
            else
            {
                _header.Update();
            }
        }

        #endregion

        public void Handle(TestRunEvent message)
        {
            // Filter the message here
            if (message.Test != _test) return;

            // Continue on with processing
            if (message.IsRunning)
            {
                _view.MarkAsExecuting();
            }
            else
            {
                _view.MarkNotExecuting();
            }

            if (message.Completed)
            {
                ChangeModeTo(Mode.Results);
            }

            _header.Update();
        }


        public void Start()
        {
            Mode mode = _test.HasResult() ? Mode.Results : Mode.Preview;
            ChangeModeTo(mode);
            EnableMode(_modes[mode].Mode);
        }

        public bool ApplyChanges()
        {
            return CurrentMode.ApplyChanges();
        }

        #region ITestPresenter Members

        public IReadOnlyDictionary<Mode, ModeCommand> Modes { get { return new ReadOnlyDictionary<Mode, ModeCommand>(_modes); } }


        public void PerformShutdown()
        {
            //throw new NotImplementedException();
            //if (_currentMode.Mode.IsDirty()) _currentMode.Mode.SaveChanges();
        }

        #endregion

        public virtual void ChangeModeTo(Mode mode)
        {
            _currentMode = _modes[mode];
            _currentMode.Execute(null);
        }

        public void EnableMode(TestMode mode)
        {
            _currentMode.Mode.ApplyChanges();

            _currentMode = _modes[mode.Mode];

            _modes.Each(x => x.Value.Enable(_currentMode));
            _header.Update();
        }

        // Strictly for Testing
        public void SetMode(Mode mode)
        {
            _currentMode = _modes[mode];
        }

        public void SetMode(TestMode mode)
        {
            _currentMode = new ModeCommand(mode, this, _test, _view);
        }

        public void Handle(TestRenamed message)
        {
            if (message.Test == _test)
            {
                _currentMode.Mode.Refresh();
            }
        }

        public void Update(object source)
        {
            if (!ReferenceEquals(source, CurrentMode))
            {
                CurrentMode.Refresh();
            }
        }
    }
}