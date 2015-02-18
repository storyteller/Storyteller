using System;
using Storyteller.Core.Commands;
using Storyteller.Core.Messages;

namespace ST.Client.Persistence
{
    public class CloneSpecCommand : Command<CloneSpec>
    {
        private readonly Lazy<IPersistenceController> _controller;
        private readonly Lazy<IClientConnector> _client;

        public CloneSpecCommand(Lazy<IPersistenceController> controller, Lazy<IClientConnector> client)
        {
            _controller = controller;
            _client = client;
        }

        protected override void HandleMessage(CloneSpec message)
        {
            var added = _controller.Value.CloneSpecification(message.id, message.name);

            _client.Value.SendMessageToClient(added);
        }
    }
}