namespace Storyteller.Core.Messages
{
    public class AddSuite : ClientMessage
    {
        public AddSuite() : base("add-suite")
        {
        }

        public string name;
        public string parent;
    }
}