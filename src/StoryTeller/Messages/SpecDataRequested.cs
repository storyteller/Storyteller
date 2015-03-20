namespace StoryTeller.Messages
{
    public class SpecDataRequested : ClientMessage
    {
        public SpecDataRequested()
            : base("spec-data-requested")
        {
        }

        public string id;
    }
}