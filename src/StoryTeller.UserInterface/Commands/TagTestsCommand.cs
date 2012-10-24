using System.Collections.Generic;
using StoryTeller.Domain;
using StoryTeller.UserInterface.Dialogs;

namespace StoryTeller.UserInterface.Commands
{
    public interface ITagTestsCommand
    {
        string Title { get; }
        void TagTests(string tags);
    }

    public class TagTestsCommand : ContextualAction<Suite>, ITagTestsCommand
    {
        private readonly IEventAggregator _events;
        private readonly IDialogLauncher _launcher;

        public TagTestsCommand(Suite subject, IDialogLauncher launcher, IEventAggregator events)
            : base(subject, Icon.Tags, "Tag Tests")
        {
            _launcher = launcher;
            _events = events;
        }

        public TagTestsCommand(Suite subject, Icon icon, string description) : base(subject, icon, description)
        {
        }

        public override bool Enabled { get { return true; } }

        public override void Execute()
        {
            _launcher.LaunchForCommand<ITagTestsCommand>(this);
        }

        public string Title { get { return "Tag Test"; } }

        public void TagTests(string tags)
        {
            IEnumerable<Test> tests = subject.GetAllTests();
            foreach(Test test in tests)
            {
                test.AddTags(tags);
                _events.SendMessage(new SaveTestMessage(test));
            }
        }
    }
}