namespace StoryTeller.Messages
{
    public class BumpSpecDate : ClientMessage
    {
        public BumpSpecDate() : base("bump-spec-date")
        {
        }

        public string id;
    }

    public class SpecDateBumped : ClientMessage
    {
        public SpecDateBumped() : base("spec-date-bumped")
        {
        }

        public string id;
    }
}
