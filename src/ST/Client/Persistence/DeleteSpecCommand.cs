using System;
using StoryTeller.Commands;
using StoryTeller.Messages;

namespace ST.Client.Persistence
{
    public class DeleteSpecCommand : Command<DeleteSpec>
    {
        private readonly Lazy<IPersistenceController> _controller;

        public DeleteSpecCommand(Lazy<IPersistenceController> controller)
        {
            _controller = controller;
        }

        public override void HandleMessage(DeleteSpec message)
        {
            _controller.Value.DeleteSpec(message.id);
        }
    }
}