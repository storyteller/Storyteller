using System.Threading.Tasks;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Remotes
{
    public class SystemRecycledListener : IListener<SystemRecycled>
    {
        private readonly IMessagingHub _messaging;
        private readonly TaskCompletionSource<SystemRecycled> _completion;

        public SystemRecycledListener(IMessagingHub messaging)
        {
            _messaging = messaging;
            _completion = new TaskCompletionSource<SystemRecycled>();
        }

        public Task<SystemRecycled> Task => _completion.Task;

        public void Receive(SystemRecycled message)
        {
            _completion.SetResult(message);
            _messaging.RemoveListener(this);
        }
    }
}