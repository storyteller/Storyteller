using System;
using Storyteller.Core.Commands;
using Storyteller.Core.Messages;

namespace ST.Client.Persistence
{
    public class SaveSpecBodyCommand : Command<SaveSpecBody>
    {
        private readonly Lazy<IPersistenceController> _controller;

        public SaveSpecBodyCommand(Lazy<IPersistenceController> controller)
        {
            _controller = controller;
        }

        protected override void HandleMessage(SaveSpecBody message)
        {
            _controller.Value.SaveSpecificationBody(message.id, message.spec);
        }
    }
}