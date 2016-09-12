using System;
using StoryTeller.Commands;
using StoryTeller.Messages;

namespace ST.Client
{
    public class ForceRecycleCommand : Command<ForceRecycle>
    {
        private readonly IRemoteController _controller;

        public ForceRecycleCommand(IRemoteController controller)
        {
            _controller = controller;
        }

        public override void HandleMessage(ForceRecycle message)
        {
            _controller.Recycle();
        }
    }
}