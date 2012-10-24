using StoryTeller.Domain;
using StoryTeller.UserInterface.Dialogs;

namespace StoryTeller.UserInterface.Commands
{
    public class CloneTestCommand : ContextualAction<Test>, IAddTestCommand
    {
        private readonly IEventAggregator _events;
        private readonly IDialogLauncher _launcher;

        public CloneTestCommand(Test subject, IDialogLauncher launcher, IEventAggregator events)
            : base(subject, Icon.Plus, "Clone Test")
        {
            _launcher = launcher;
            _events = events;
        }

        public override bool Enabled { get { return true; } }

        #region IAddTestCommand Members

        public void CreateTest(string testName)
        {
            Test clonedTest = subject.Clone(testName);
            subject.Parent.AddTest(clonedTest);

            _events.SendMessage(new SaveTestMessage(clonedTest));
            _events.SendMessage(new TestAddedMessage(clonedTest));
            _events.SendMessage(new OpenItemMessage(clonedTest));
        }

        public string Title { get { return "Clone Test " + subject.Name; } }

        #endregion

        public override void Execute()
        {
            _launcher.LaunchForCommand<IAddTestCommand>(this);
        }
    }
}