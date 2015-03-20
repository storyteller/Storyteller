using StoryTeller.Model.Persistence;

namespace StoryTeller.Messages
{
    public class SpecNodeChanged : ClientMessage
    {
        public SpecNodeChanged() : base("spec-node-changed")
        {
        }

        public SpecNode node;
    }
}