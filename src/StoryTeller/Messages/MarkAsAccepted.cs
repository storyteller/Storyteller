namespace StoryTeller.Messages
{
    public class MarkAsAccepted : ClientMessage
    {
        public MarkAsAccepted() : base("mark-as-acceptance")
        {
        }

        public string[] list = new string[0];
    }
}