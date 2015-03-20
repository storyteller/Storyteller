using StoryTeller.Model.Persistence;

namespace StoryTeller.Messages
{
    public class SpecNodeAdded : ClientMessage
    {
        public SpecNodeAdded() : base("spec-node-added")
        {
        }

        public string suite;
        public SpecNode node;
    }
}