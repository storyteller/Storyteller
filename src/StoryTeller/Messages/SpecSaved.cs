using StoryTeller.Model;

namespace StoryTeller.Messages
{
    public class SpecSaved : ClientMessage
    {
        public SpecSaved() : base("spec-saved")
        {
        }

        public Specification spec;
    }
}