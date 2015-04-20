using System;
using StoryTeller.Commands;
using StoryTeller.Messages;

namespace ST.Client.Persistence
{
    public class ReloadSpecsCommand : Command<ClearAllResults>
    {
        private readonly Lazy<IPersistenceController> _controller;

        public ReloadSpecsCommand(Lazy<IPersistenceController> controller)
        {
            _controller = controller;
        }

        public override void HandleMessage(ClearAllResults message)
        {
            _controller.Value.ReloadHierarchy();
        }
    }
}