using Storyteller.Core.Model.Persistence;

namespace Storyteller.Core.Messages
{
    public class HierarchyLoaded : ClientMessage
    {
        public Suite hierarchy;

        public HierarchyLoaded() : base("hierarchy-loaded")
        {
        }
    }
}