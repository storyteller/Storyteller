using StoryTeller.Messages;

namespace StoryTeller.Remotes
{
    public class SystemRecycleStarted : ClientMessage
    {
        public SystemRecycleStarted() : base("system-recycle-start")
        {
        }
    }
}