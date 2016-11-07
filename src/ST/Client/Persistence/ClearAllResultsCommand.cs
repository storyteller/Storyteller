using StoryTeller.Messages;

namespace ST.Client.Persistence
{
    public class ClearAllResultsCommand : Command<ClearAllResults>
    {
        public override void HandleMessage(ClearAllResults message, IApplication app)
        {
            app.Persistence.ClearAllResults();
        }
    }
}