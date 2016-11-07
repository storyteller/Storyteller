using StoryTeller.Messages;

namespace ST.Client.Persistence
{
    public class ReloadSpecsCommand : Command<ReloadSpecs>
    {
        public override void HandleMessage(ReloadSpecs message, IApplication app)
        {
            app.Persistence.ReloadHierarchy();
        }
    }
}