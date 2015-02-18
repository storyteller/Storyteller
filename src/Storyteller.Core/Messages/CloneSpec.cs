namespace Storyteller.Core.Messages
{
    public class CloneSpec : ClientMessage
    {
        public CloneSpec() : base("clone-spec")
        {
        }

        public string id;
        public string name;
    }
}