using StoryTeller.Messages;

namespace ST.Client.Fixtures
{
    public class ExportAllFixturesCommand : Command<ExportAllFixtures>
    {
        public override void HandleMessage(ExportAllFixtures message, IApplication app)
        {
            app.Fixtures.ExportAllFixtures();
        }
    }
}