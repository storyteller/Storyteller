using StoryTeller;
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

    public class CreateFixtureCommand : Command<CreateFixture>
    {
        public override void HandleMessage(CreateFixture message, IApplication app)
        {
            var file = app.Fixtures.CreateFixture(message.key);
            ProcessLauncher.GotoUrl(file);
        }
    }
}