using System;
using StoryTeller.Execution;
using StoryTeller.UserInterface.Handlers;

namespace StoryTeller.UserInterface.Recycling
{
    public interface IBinaryRecyclingDialog
    {
        void Start();
        void Hide();
        void ShowMessage(string text);
        void ShowProgress(int total, int index, string fixtureName);
    }


    // BinaryFailureHandler:  Should be a singleton
    // change the status on the bottom right to show a link to the binary recycle failure

    public class RecyclingHandler : 
        IHandler,
        IListener<BinaryRecycleStarted>,
        IListener<BinaryRecycleFailure>,
        IListener<BinaryRecycleFinished>,
        IListener<BinaryRecycleMessage>,
        IListener<BinaryRecycleProcess>
    {
        private readonly IBinaryRecyclingDialog _dialog;
        private readonly IApplicationShell _shell;

        public RecyclingHandler(IBinaryRecyclingDialog dialog, IApplicationShell shell)
        {
            _dialog = dialog;
            _shell = shell;
        }

        public void Handle(BinaryRecycleStarted message)
        {
            _shell.LockAsBusy();
            _dialog.Start();
        }

        public void Handle(BinaryRecycleFailure message)
        {
            _shell.LockAsInvalidBinaryState();
            _dialog.Hide();
        }

        public void Handle(BinaryRecycleFinished message)
        {
            _dialog.Hide();
            _shell.Unlock();
        }

        public void Handle(BinaryRecycleMessage message)
        {
            _dialog.ShowMessage(message.Message);
        }

        public void Handle(BinaryRecycleProcess message)
        {
            _dialog.ShowProgress(message.Total, message.Index, message.FixtureName);
        }
    }
}