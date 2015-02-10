using Storyteller.Core.Remotes.Messaging;

namespace Storyteller.Core.Messages
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