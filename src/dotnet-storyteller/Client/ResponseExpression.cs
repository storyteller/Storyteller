using System;
using System.Threading.Tasks;
using StoryTeller.Remotes.Messaging;

namespace ST.Client
{
    public class ResponseExpression
    {
        private readonly IMessagingHub _messaging;
        private readonly Action _sendAction;

        public ResponseExpression(Action sendAction, IMessagingHub messaging)
        {
            _sendAction = sendAction;
            _messaging = messaging;
        }

        public Task<T> AndWaitFor<T>()
        {
            var watcher = new ResponseWatcher<T>(_messaging);
            _messaging.AddListener(watcher);

            _sendAction();

            return watcher.Task;
        }
    }
}