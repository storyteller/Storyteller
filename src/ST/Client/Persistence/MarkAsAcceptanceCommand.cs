using System;
using System.Collections.Generic;
using Baseline;
using StoryTeller.Commands;
using StoryTeller.Messages;
using StoryTeller.Model;

namespace ST.Client.Persistence
{
    public class MarkAsAcceptanceCommand : Command<MarkAsAccepted>
    {
        private readonly Lazy<IPersistenceController> _controller;

        public MarkAsAcceptanceCommand(Lazy<IPersistenceController> controller)
        {
            _controller = controller;
        }

        public override void HandleMessage(MarkAsAccepted message)
        {
            message.list.Each(id => _controller.Value.SetLifecycle(id, Lifecycle.Acceptance));
        }
    }
}