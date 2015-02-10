namespace Storyteller.Core.Messages
{
    public class SpecCanceled : ClientMessage
    {
        public string id;

        public SpecCanceled(string id) : base("spec-canceled")
        {
            this.id = id;
        }
    }
}