using Storyteller.Core.Model;

namespace Storyteller.Core.Messages
{
    public class SpecData : ClientMessage
    {
        public SpecData() : base("spec-data")
        {
        }

        public string id;
        public Specification data;
        public SpecResults results;
    }
}