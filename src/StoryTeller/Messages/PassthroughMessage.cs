using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Messages
{
    public class PassthroughMessage
    {
        public PassthroughMessage()
        {
        }

        public PassthroughMessage(object inner)
        {
            json = JsonSerialization.ToCleanJson(inner);
        }

        public string json;
    }
}