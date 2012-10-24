using StoryTeller.Domain;
using StoryTeller.UserInterface.Exploring;

namespace StoryTeller.UserInterface.Commands
{
    public class MarkRegressionCommand : MarkLifecycleCommand
    {
        public MarkRegressionCommand(Suite suite, ITestService service, ITestExplorer explorer)
            : base(suite, service, explorer)
        {
        }

        protected override Lifecycle lifecycle()
        {
            return Lifecycle.Regression;
        }
    }
}