using StoryTeller.Domain;

namespace StoryTeller.UserInterface.Commands
{
    public class DeleteTestCommand : ContextualAction<Test>
    {
        public const string DIALOG_MESSAGE = "Ok to permanently delete this Test?";
        public const string DIALOG_TITLE = "Delete Test?";

        private readonly IMessageCreator _messageBox;
        private readonly ITestService _service;

        public DeleteTestCommand(Test subject, ITestService service, IMessageCreator messageBox)
            : base(subject, Icon.Delete, "Delete Test")
        {
            _service = service;
            _messageBox = messageBox;
        }

        public override bool Enabled { get { return true; } }

        public override void Execute()
        {
            if (_messageBox.AskUser(DIALOG_TITLE, DIALOG_MESSAGE) != UserMessageResponse.Yes) return;
            _service.DeleteTest(subject);
        }
    }
}