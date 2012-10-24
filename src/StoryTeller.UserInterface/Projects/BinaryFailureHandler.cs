using System;
using StoryTeller.Execution;
using StoryTeller.UserInterface.Dialogs;
using StoryTeller.Workspace;

namespace StoryTeller.UserInterface.Projects
{
    public interface IBinaryFailureHandler : IStartable
    {
        string ErrorText { get; }
        void Retry();
        void Open();
    }

    public class OpenBinaryFailureDialog
    {
        
    }

    public class BinaryFailureHandler : IListener<BinaryRecycleFailure>, IListener<OpenBinaryFailureDialog>, IBinaryFailureHandler
    {
        private readonly IEventAggregator _events;
        private readonly IDialogLauncher _launcher;
        private string _message;

        public BinaryFailureHandler(IEventAggregator events, IDialogLauncher launcher)
        {
            _events = events;
            _launcher = launcher;
        }

        #region IBinaryFailureHandler Members

        public string ErrorText { get { return _message; } }

        public void Retry()
        {
            _events.SendMessage<ForceBinaryRecycle>();
        }

        public void Start()
        {
        }

        #endregion

        #region IListener<BinaryRecycleFailure> Members

        public void Handle(BinaryRecycleFailure message)
        {
            _message = message.ErrorMessage;
            Open();
        }

        public void Open()
        {
            _launcher.LaunchForCommand<IBinaryFailureHandler>(this);
        }

        #endregion

        public void Handle(OpenBinaryFailureDialog message)
        {
            Open();
        }
    }
}