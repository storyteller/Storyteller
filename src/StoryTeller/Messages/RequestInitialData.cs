namespace StoryTeller.Messages
{
    public class RequestInitialData : ClientMessage
    {
        public RequestInitialData() : base("request-initial-data")
        {
        }
    }
}