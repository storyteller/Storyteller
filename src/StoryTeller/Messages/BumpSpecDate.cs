using StoryTeller.Model;

namespace StoryTeller.Messages
{
    public class BumpSpecDate : ClientMessage
    {
        public BumpSpecDate() : base("bump-spec-date")
        {
        }

        public string id;
    }

    public class SpecHeaderUpdated : ClientMessage
    {
        public SpecHeaderUpdated() : base("spec-header-updated")
        {
        }

        public Specification spec;
    }
}
