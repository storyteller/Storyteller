using System.Collections.Generic;
using StoryTeller.Domain;
using StoryTeller.UserInterface.Exploring;

namespace StoryTeller.UserInterface.Commands
{
    public class RunSuiteCommand : ContextualAction<Suite>
    {
        private readonly ITestExplorer _explorer;
        private readonly ITestService _service;

        public RunSuiteCommand(Suite subject, ITestService service, ITestExplorer explorer)
            : base(subject, Icon.Run, "Run Suite")
        {
            _service = service;
            _explorer = explorer;
        }

        public override bool Enabled { get { return true; } }

        public override void Execute()
        {
            _explorer.TestsMatchingFilter(subject).Each(_service.QueueTest);
        }
    }
}