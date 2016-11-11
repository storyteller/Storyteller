using StoryTeller.Messages;

namespace ST.Client.Fixtures
{
    public class ReloadFixturesCommand : Command<ReloadFixtures>
    {
        public override void HandleMessage(ReloadFixtures message, IApplication app)
        {
            app.Fixtures.ReloadFixtures();
        }
    }
}