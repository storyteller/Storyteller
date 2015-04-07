using System;
using StoryTeller.Commands;
using StoryTeller.Messages;
using StoryTeller.Model;

namespace ST.Client.Persistence
{

    public class MarkAsAcceptedCommand : Command<MarkAsAccepted>
    {
        private readonly Lazy<IPersistenceController> _controller;

        public MarkAsAcceptedCommand(Lazy<IPersistenceController> controller)
        {
            _controller = controller;
        }

        public override void HandleMessage(MarkAsAccepted message)
        {
            _controller.Value.ChangeLifecycle(message.list, Lifecycle.Acceptance);
        }
    }
}