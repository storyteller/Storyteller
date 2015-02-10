namespace Storyteller.Core.Messages
{
    public class SpecQueued : ClientMessage
    {
        public string id;

        public SpecQueued(string id) : base("spec-queued")
        {
            this.id = id;
        }
    }
}