namespace StoryTeller.Messages
{
    public class AddSpec : ClientMessage
    {
        public AddSpec() : base("add-spec")
        {
        }

        public string parent;
        public string name;
    }
}