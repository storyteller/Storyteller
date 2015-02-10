using Storyteller.Core.Model.Persistence;

namespace Storyteller.Core.Messages
{
    public class HiearchyLoaded : ClientMessage
    {
        public Suite root;

        public HiearchyLoaded(Suite root) : base("hierarchy-loaded")
        {
            this.root = root;
        }
    }
}