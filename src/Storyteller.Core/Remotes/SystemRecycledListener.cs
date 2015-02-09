using System.Threading.Tasks;
using Storyteller.Core.Remotes.Messaging;

namespace Storyteller.Core.Remotes
{
    public class SystemRecycledListener : IListener<SystemRecycled>
    {
        private readonly TaskCompletionSource<SystemRecycled> _completion;

        public SystemRecycledListener()
        {
            _completion = new TaskCompletionSource<SystemRecycled>();
        }

        public Task<SystemRecycled> Task
        {
            get { return _completion.Task; }
        }

        public void Receive(SystemRecycled message)
        {
            _completion.SetResult(message);
        }
    }
}