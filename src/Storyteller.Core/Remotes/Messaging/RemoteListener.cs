using System;

namespace Storyteller.Core.Remotes.Messaging
{
    public class RemoteListener : MarshalByRefObject, IRemoteListener
    {
        private readonly IMessagingHub _messagingHub;

        public RemoteListener(IMessagingHub messagingHub)
        {
            _messagingHub = messagingHub;
        }

        public void Send(string json)
        {
            _messagingHub.SendJson(json);
        }

        /// <summary>
        /// Really only for testing
        /// </summary>
        /// <param name="message"></param>
        public void SendObject(object message)
        {
            Send(JsonSerialization.ToJson(message));
        }

        public override object InitializeLifetimeService()
        {
            return null;
        }

        public T WaitForMessage<T>(Func<T, bool> filter, Action action, int wait = 5000)
        {
            return _messagingHub.WaitForMessage(filter, action, wait);
        }

    }
}