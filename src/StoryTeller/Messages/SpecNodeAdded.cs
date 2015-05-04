using StoryTeller.Model;

namespace StoryTeller.Messages
{
    public class SpecNodeAdded : ClientMessage
    {
        public SpecNodeAdded() : base("spec-node-added")
        {
        }

        public string suite;
        public Specification node;
    }
}