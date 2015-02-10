namespace Storyteller.Core.Messages
{
    public class SpecRunning : ClientMessage
    {
        public string id;

        public SpecRunning(string id) : base("spec-running")
        {
            this.id = id;
        }
    }
}