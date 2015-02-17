using Storyteller.Core.Model.Persistence;

namespace Storyteller.Core.Messages
{
    public class HierarchyLoaded : ClientMessage
    {
        public Suite root;

        public HierarchyLoaded(Suite root) : base("hierarchy-loaded")
        {
            this.root = root;
        }
    }
}