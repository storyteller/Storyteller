using Storyteller.Core.Messages;
using Storyteller.Core.Remotes.Messaging;

namespace Storyteller.Core.Commands
{
    public interface ICommand
    {
        void HandleJson(string json);
        bool Matches(string json);
    }

    public abstract class Command<T> : ICommand where T : ClientMessage
    {
        public void HandleJson(string json)
        {
            var message = JsonSerialization.Deserialize<T>(json);
            HandleMessage(message);
        }

        public abstract void HandleMessage(T message);

        public bool Matches(string json)
        {
            var messageType = JsonSerialization.TypeForJson(json);
            if (messageType == null) return false;

            return messageType == typeof (T);
        }
    }
}