namespace StoryTeller.Messages
{
    public class BumpSpecDate : ClientMessage
    {
        public BumpSpecDate() : base("bump-spec-date")
        {
        }

        public string id;
        public int timePeriod;
    }
}
