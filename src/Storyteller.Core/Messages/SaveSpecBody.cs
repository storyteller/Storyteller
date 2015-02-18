using Storyteller.Core.Model;

namespace Storyteller.Core.Messages
{
    public class SaveSpecBody : ClientMessage
    {
        public SaveSpecBody() : base("save-spec-body")
        {
        }

        public string id;
        public Specification spec;
    }
}