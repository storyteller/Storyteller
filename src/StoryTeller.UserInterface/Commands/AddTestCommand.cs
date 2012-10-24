using StoryTeller.Domain;
using StoryTeller.UserInterface.Dialogs;

namespace StoryTeller.UserInterface.Commands
{
    public interface IAddTestCommand
    {
        string Title { get; }
        void CreateTest(string testName);
    }

    public class AddTestCommand : ContextualAction<Suite>, IAddTestCommand
    {
        private readonly IEventAggregator _events;
        private readonly IDialogLauncher _launcher;

        public AddTestCommand(Suite subject, IDialogLauncher launcher, IEventAggregator events)
            : base(subject, Icon.Plus, "Add Test")
        {
            _launcher = launcher;
            _events = events;
        }

        public override bool Enabled { get { return true; } }

        #region IAddTestCommand Members

        public void CreateTest(string testName)
        {
            var test = new Test(testName);
            subject.AddTest(test);

            _events.SendMessage(new SaveTestMessage(test));
            _events.SendMessage(new TestAddedMessage(test));
            _events.SendMessage(new OpenItemMessage(test));
        }

        public string Title { get { return "Add Test"; } }

        #endregion

        public override void Execute()
        {
            _launcher.LaunchForCommand<IAddTestCommand>(this);
        }
    }
}