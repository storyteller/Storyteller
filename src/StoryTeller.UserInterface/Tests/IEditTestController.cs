using System;
using StoryTeller.Domain;
using StoryTeller.UserInterface.Actions;

namespace StoryTeller.UserInterface.Tests
{
    public interface IEditTestController
    {
        bool SaveChanges();
        ActionCommand SaveCommand { get; }
        ActionCommand RunCommand { get; }
        ActionCommand CancelCommand { get; }
    }

    public class EditTestController : IEditTestController, IListener<TestRunEvent>
    {
        private readonly Test _test;
        private readonly ITestService _service;
        private readonly ITestStateManager _stateManager;
        private readonly ITestPresenter _presenter;
        private readonly IMessageCreator _messageBox;
        private readonly ActionCommand _runCommand;
        private readonly ActionCommand _saveCommand;
        private readonly ActionCommand _cancelCommand;

        public EditTestController(Test test, ITestService service, ITestStateManager stateManager, ITestPresenter presenter, IMessageCreator messageBox)
        {
            _test = test;
            _service = service;
            _stateManager = stateManager;
            _presenter = presenter;
            _messageBox = messageBox;

            _runCommand = new ActionCommand(() =>
            {
                if (SaveChanges())
                {
                    _service.QueueTest(_test);
                }
            });

            _saveCommand = new ActionCommand(() => SaveChanges());
            _cancelCommand = new ActionCommand(Cancel);
        }

        public void Cancel()
        {
            _service.CancelTest(_test);
        }

        public ActionCommand RunCommand { get { return _runCommand; } }
        
        // virtual for testing
        public virtual bool SaveChanges()
        {
            if (_presenter.ApplyChanges())
            {
                try
                {
                    _service.Save(_test);
                    _stateManager.RecordSnapshot();
                    return true;
                }
                catch (Exception e)
                {
                    _messageBox.ShowAlert("Save Failed!", "System Failure\n" + e.ToString());
                    return false;
                }
            }

            return false;
        }

        public ActionCommand SaveCommand { get { return _saveCommand; } }
        public ActionCommand CancelCommand { get { return _cancelCommand; } }

        void IListener<TestRunEvent>.Handle(TestRunEvent message)
        {
            if (message.Test == _test)
            {
                EnableCommands();
            }
        }

        public void EnableCommands()
        {
            bool isQueued = _service.GetStatus(_test) != TestState.NotQueued;

            SaveCommand.Enabled = true;
            CancelCommand.Enabled = isQueued;
            RunCommand.Enabled = !isQueued;
        }
    }

}