using System;
using StoryTeller.Commands;
using StoryTeller.Messages;

namespace ST.Client.Persistence
{
    public class ReloadSpecsCommand : Command<ReloadSpecs>
    {
        private readonly Lazy<IPersistenceController> _controller;

        public ReloadSpecsCommand(Lazy<IPersistenceController> controller)
        {
            _controller = controller;
        }

        public override void HandleMessage(ReloadSpecs message)
        {
            _controller.Value.ReloadHierarchy();
        }
    }
}