using System;
using StoryTeller.Commands;
using StoryTeller.Messages;
using StoryTeller.Remotes;

namespace ST.Client.Persistence
{
    public class BumpSpecDateCommand : Command<BumpSpecDate>
    {
        private readonly Lazy<IPersistenceController> _controller;
        private readonly Lazy<IClientConnector> _clientConnector;

        public BumpSpecDateCommand(Lazy<IPersistenceController> controller, Lazy<IClientConnector> clientConnector)
        {
            _controller = controller;
            _clientConnector = clientConnector;
        }

        public override void HandleMessage(BumpSpecDate message)
        {
            var cont = _controller.Value;
            var connector = _clientConnector.Value;
            var spec = cont.LoadSpecificationById(message.id);
            spec.ExpirationPeriod = message.timePeriod;
            cont.SaveSpecification(message.id, spec);
            connector.SendMessageToClient(new SpecHeaderUpdated
            {
                spec = spec
            });
        }
    }
}
