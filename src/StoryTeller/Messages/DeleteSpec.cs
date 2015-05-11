namespace StoryTeller.Messages
{
    public class DeleteSpec : ClientMessage
    {
        public DeleteSpec() : base("delete-spec")
        {
        }

        public string id { get; set; }
    }
}