using System;
using Storyteller.Core.Commands;
using Storyteller.Core.Messages;

namespace ST.Client.Persistence
{
    public class RequestSpecDataCommand : Command<SpecDataRequested>
    {
        private readonly Lazy<IPersistenceController> _persistence;
        private readonly Lazy<IClientConnector> _client;

        public RequestSpecDataCommand(Lazy<IPersistenceController> persistence, Lazy<IClientConnector> client)
        {
            _persistence = persistence;
            _client = client;
        }

        public override void HandleMessage(SpecDataRequested message)
        {
            var data = _persistence.Value.LoadSpecification(message.id);

            _client.Value.SendMessageToClient(data);
        }
    }
}