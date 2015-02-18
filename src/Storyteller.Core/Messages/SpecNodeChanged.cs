using Storyteller.Core.Model.Persistence;

namespace Storyteller.Core.Messages
{
    public class SpecNodeChanged : ClientMessage
    {
        public SpecNodeChanged() : base("spec-node-changed")
        {
        }

        public SpecNode node;
    }
}