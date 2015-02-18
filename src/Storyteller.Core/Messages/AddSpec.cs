namespace Storyteller.Core.Messages
{
    public class AddSpec : ClientMessage
    {
        public AddSpec() : base("add-spec")
        {
        }

        public string suite;
        public string name;
    }
}