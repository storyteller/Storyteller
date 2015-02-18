using Storyteller.Core.Model.Persistence;

namespace Storyteller.Core.Messages
{
    public class SpecChanged : ClientMessage
    {
        public SpecChanged() : base("spec-changed")
        {
        }

        public SpecNode node;
    }
}