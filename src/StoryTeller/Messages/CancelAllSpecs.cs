namespace StoryTeller.Messages
{
    public class CancelAllSpecs : ClientMessage
    {
        public CancelAllSpecs()
            : base("cancel-all-specs")
        {
        }

        public string[] list;
    }
}