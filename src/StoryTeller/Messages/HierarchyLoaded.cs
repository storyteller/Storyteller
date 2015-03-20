using StoryTeller.Model.Persistence;

namespace StoryTeller.Messages
{
    public class HierarchyLoaded : ClientMessage
    {
        public Suite hierarchy;

        public HierarchyLoaded() : base("hierarchy-loaded")
        {
        }
    }
}