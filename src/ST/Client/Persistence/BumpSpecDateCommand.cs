using System;
using StoryTeller.Commands;
using StoryTeller.Messages;

namespace ST.Client.Persistence
{
    public class BumpSpecDateCommand : Command<BumpSpecDate>
    {
        private readonly Lazy<IPersistenceController> _controller;

        public BumpSpecDateCommand(Lazy<IPersistenceController> controller)
        {
            _controller = controller;
        }

        public override void HandleMessage(BumpSpecDate message)
        {
            var cont = _controller.Value;
            cont.SaveSpecification(message.id, cont.LoadSpecificationById(message.id));
            cont.ReloadHierarchy();
        }
    }
}
