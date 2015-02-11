using Storyteller.Core.Messages;
using Storyteller.Core.Remotes;

namespace Storyteller.Core.Commands
{
    public class ForceRecycleCommand : Command<ForceRecycle>
    {
        private readonly IRemoteController _controller;

        public ForceRecycleCommand(IRemoteController controller)
        {
            _controller = controller;
        }

        protected override void HandleMessage(ForceRecycle message)
        {
            _controller.Recycle();
        }
    }
}