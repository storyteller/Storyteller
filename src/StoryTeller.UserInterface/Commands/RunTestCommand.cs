using StoryTeller.Domain;

namespace StoryTeller.UserInterface.Commands
{
    public class RunTestCommand : ContextualAction<Test>
    {
        private readonly ITestService _service;

        public RunTestCommand(Test subject, ITestService service)
            : base(subject, Icon.Run, "Run Test")
        {
            _service = service;
        }

        public override bool Enabled { get { return _service.GetStatus(subject) == TestState.NotQueued; } }

        public override void Execute()
        {
            _service.QueueTest(subject);
        }
    }
}