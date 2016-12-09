using Baseline;
using StoryTeller.Messages;
using StoryTeller.Model;

namespace ST.Client.Persistence
{
    public class MarkAsAcceptanceCommand : Command<MarkAsAccepted>
    {
        public override void HandleMessage(MarkAsAccepted message, IApplication app)
        {
            message.list.Each(id => app.Persistence.SetLifecycle(id, Lifecycle.Acceptance));
        }
    }
}