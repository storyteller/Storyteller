using System;
using Storyteller.Core.Commands;
using Storyteller.Core.Messages;

namespace ST.Client.Persistence
{
    public class AddSpecCommand : Command<AddSpec>
    {
        private readonly Lazy<IPersistenceController> _controller;

        public AddSpecCommand(Lazy<IPersistenceController> controller)
        {
            _controller = controller;
        }

        public override void HandleMessage(AddSpec message)
        {
            _controller.Value.AddSpec(message.suite, message.name);
        }
    }
}