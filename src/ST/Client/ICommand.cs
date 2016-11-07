using StoryTeller.Messages;
using StoryTeller.Remotes.Messaging;

namespace ST.Client
{
    public interface ICommand
    {
        void HandleJson(string json, IApplication app);
        bool Matches(string json);
    }

    public abstract class Command<T> : ICommand where T : ClientMessage
    {
        public void HandleJson(string json, IApplication app)
        {
            var message = JsonSerialization.Deserialize<T>(json);
            HandleMessage(message, app);
        }

        public abstract void HandleMessage(T message, IApplication app);

        public bool Matches(string json)
        {
            var messageType = JsonSerialization.TypeForJson(json);
            if (messageType == null) return false;

            return messageType == typeof (T);
        }
    }
}