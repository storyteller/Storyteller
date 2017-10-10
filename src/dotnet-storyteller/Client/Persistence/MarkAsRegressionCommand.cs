using Baseline;
using StoryTeller.Messages;
using StoryTeller.Model;

namespace ST.Client.Persistence
{
    public class MarkAsRegressionCommand : Command<MarkAsRegression>
    {
        public override void HandleMessage(MarkAsRegression message, IApplication app)
        {
            message.list.Each(id => app.Persistence.SetLifecycle(id, Lifecycle.Regression));
        }
    }
}