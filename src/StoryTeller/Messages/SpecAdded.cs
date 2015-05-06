using StoryTeller.Model;

namespace StoryTeller.Messages
{
    public class SpecAdded : ClientMessage
    {
        public SpecAdded() : base("spec-added")
        {
        }

        public string suite;
        public Specification data;
    }
}