namespace StoryTeller.Messages
{
    public class OpenInEditor : ClientMessage
    {
        public OpenInEditor() : base("open-in-editor")
        {
        }

        public string id { get; set; }
    }
}