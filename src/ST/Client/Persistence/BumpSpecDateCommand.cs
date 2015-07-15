using System;
using StoryTeller.Commands;
using StoryTeller.Messages;

namespace ST.Client.Persistence
{
    public class BumpSpecDateCommand : Command<BumpSpecDate>
    {
        private readonly Lazy<IPersistenceController> _controller;
        private Lazy<IClientConnector> _connector;

        public BumpSpecDateCommand(Lazy<IPersistenceController> controller, Lazy<IClientConnector> connector)
        {
            _controller = controller;
            _connector = connector;
        }

        public override void HandleMessage(BumpSpecDate message)
        {
            var cont = _controller.Value;
            var connect = _connector.Value;
            cont.SaveSpecification(message.id, cont.LoadSpecificationById(message.id));
            connect.SendMessageToClient(new SpecDateBumped
            {
                id = message.id
            });
        }
    }
}
