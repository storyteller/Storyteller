using System;
using StoryTeller.Commands;
using StoryTeller.Messages;

namespace ST.Client.Persistence
{
    public class SaveSpecBodyCommand : Command<SaveSpecBody>
    {
        private readonly Lazy<IPersistenceController> _controller;
        private readonly Lazy<IClientConnector> _connector;

        public SaveSpecBodyCommand(Lazy<IPersistenceController> controller, Lazy<IClientConnector> connector)
        {
            _controller = controller;
            _connector = connector;
        }

        // TODO -- dunno, maybe a failure message back to the client maybe?
        public override void HandleMessage(SaveSpecBody message)
        {
            _controller.Value.SaveSpecification(message.id, message.spec);

            _connector.Value.SendMessageToClient(new SpecSaved
            {
                spec = _controller.Value.LoadSpecificationById(message.spec.id)
            });
        }
    }
}
