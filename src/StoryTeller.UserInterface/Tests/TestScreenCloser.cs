using System;
using FubuCore;
using StoryTeller.Domain;

namespace StoryTeller.UserInterface.Tests
{

    public interface ITestScreenCloser
    {
        bool CanClose();
    }

    public class TestScreenCloser : ITestScreenCloser
    {
        private readonly Test _test;
        private readonly ITestStateManager _stateManager;
        private readonly IMessageCreator _messageBox;
        private readonly IEditTestController _controller;

        public TestScreenCloser(Test test, ITestStateManager stateManager, IMessageCreator messageBox, IEditTestController controller)
        {
            _test = test;
            _stateManager = stateManager;
            _messageBox = messageBox;
            _controller = controller;
        }

        public bool CanClose()
        {
            if (!_stateManager.IsDirty()) return true;

            string message =
                "Select OK to save changes to {0}, No to discard changes or cancel to continue editing".ToFormat(
                    _test.Name);
            UserMessageResponse dialogResult = _messageBox.AskUserCanCancel("Unsaved Changes", message);
            bool result = false;

            //Something better to do here than a switch statement I'm sure.
            switch (dialogResult)
            {
                //User says to save changes (OK)
                case UserMessageResponse.Yes:
                    var applied = _controller.SaveChanges();
                    if (!applied)
                    {
                        throw new NotImplementedException();
                    }

                    result = true;
                    break;

                //User says cancel close changes (No)
                case UserMessageResponse.Cancel:
                    break;

                //User says discard changes (cancel)
                default:
                    result = true;
                    break;
            }

            return result;
        }
    }
}