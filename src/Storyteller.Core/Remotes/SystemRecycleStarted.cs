using Storyteller.Core.Messages;

namespace Storyteller.Core.Remotes
{
    public class SystemRecycleStarted : ClientMessage
    {
        public SystemRecycleStarted() : base("system-recycle-start")
        {
        }
    }
}