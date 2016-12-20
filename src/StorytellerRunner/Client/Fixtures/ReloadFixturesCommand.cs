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

    public class ReloadAllCommand : Command<ReloadAll>
    {
        public override void HandleMessage(ReloadAll message, IApplication app)
        {
            app.Fixtures.ReloadFixtures();
            app.Persistence.ReloadHierarchy();


            app.Engine.Recycle();
        }
    }
}