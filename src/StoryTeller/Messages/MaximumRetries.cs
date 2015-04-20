namespace StoryTeller.Messages
{
    public class MaximumRetries : ClientMessage
    {
        public MaximumRetries() : base("maximum-retries")
        {
        }

        public int number = 0;
        public string id;
    }
}