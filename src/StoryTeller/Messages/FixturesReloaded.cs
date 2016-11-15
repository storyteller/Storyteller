using StoryTeller.Model;

namespace StoryTeller.Messages
{
    public class FixturesReloaded : ClientMessage
    {
        public FixturesReloaded() : base("fixtures-reloaded")
        {
        }

        public FixtureModel[] fixtures { get; set; }
    }

    public class ExportAllFixtures : ClientMessage
    {
        public ExportAllFixtures() : base("export-all-fixtures")
        {
        }
    }

    public class CreateFixture : ClientMessage
    {
        public CreateFixture() : base("create-fixture")
        {
        }

        public string key { get; set; }
    }
}