using System;
using Storyteller.Core.Commands;
using Storyteller.Core.Messages;

namespace ST.Client.Persistence
{
    public class AddSpecCommand : Command<AddSpec>
    {
        private readonly Lazy<IPersistenceController> _controller;
        private readonly Lazy<IClientConnector> _connector;

        public AddSpecCommand(Lazy<IPersistenceController> controller, Lazy<IClientConnector> connector)
        {
            _controller = controller;
            _connector = connector;
        }

        public override void HandleMessage(AddSpec message)
        {
            _controller.Value.AddSpec(message.parent, message.name);
            _connector.Value.SendMessageToClient(new HierarchyLoaded
            {
                hierarchy = _controller.Value.Hierarchy.Top
            });
        }
    }
}