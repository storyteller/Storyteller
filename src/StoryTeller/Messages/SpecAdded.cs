using StoryTeller.Model;
using StoryTeller.Model.Persistence;

namespace StoryTeller.Messages
{
    public class SpecAdded : ClientMessage
    {
        public SpecAdded(Suite hierarchy, Specification data) : base("spec-added")
        {
            this.hierarchy = hierarchy;
            this.data = data;
        }

        public readonly Suite hierarchy;
        public readonly Specification data;
    }
}