namespace Storyteller.Core.Messages
{
    public class MarkAsAccepted : ClientMessage
    {
        public MarkAsAccepted() : base("mark-as-accepted")
        {
        }

        public string[] list = new string[0];
    }
}