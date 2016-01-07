namespace StoryTeller.Messages
{
    public class CancelAllSpecs : ClientMessage
    {
        public CancelAllSpecs()
            : base("cancel-all-Specifications")
        {
        }

        public string[] list;
    }
}