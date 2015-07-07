using System;
using System.Linq;
using StoryTeller.Commands;
using StoryTeller.Messages;
using StoryTeller.Remotes;

namespace ST.Client
{
    public class ForceRecycleCommand : Command<ForceRecycle>
    {
        private readonly IRemoteController _controller;
        private readonly Lazy<IPersistenceController> _persistence;

        public ForceRecycleCommand(IRemoteController controller, Lazy<IPersistenceController> persistence)
        {
            _controller = controller;
            _persistence = persistence;
        }

        public override void HandleMessage(ForceRecycle message)
        {
            var queued = _controller.QueueState();
            _controller.Recycle();

            var runSpecs = new RunSpecs
            {
                specs = queued.AllSpecIds().Select(id =>
                {
                    return _persistence.Value.LoadSpecification(id).data;
            
                }).ToArray()
            };

            _controller.SendMessage(runSpecs);
        }
    }
}