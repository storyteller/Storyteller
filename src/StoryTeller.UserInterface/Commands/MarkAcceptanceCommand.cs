using StoryTeller.Domain;
using StoryTeller.UserInterface.Exploring;

namespace StoryTeller.UserInterface.Commands
{
    public class MarkAcceptanceCommand : MarkLifecycleCommand
    {
        public MarkAcceptanceCommand(Suite suite, ITestService service, ITestExplorer explorer)
            : base(suite, service, explorer)
        {
        }

        protected override Lifecycle lifecycle()
        {
            return Lifecycle.Acceptance;
        }
    }
}