using StoryTeller.Messages;

namespace StoryTeller
{
    public class Shutdown : ClientMessage
    {
        public Shutdown() : base("shutdown")
        {
        }
    }
}