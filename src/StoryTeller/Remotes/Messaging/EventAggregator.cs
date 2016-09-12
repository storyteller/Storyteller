using System;
using System.Collections.Concurrent;
using System.Threading;
using System.Threading.Tasks;

namespace StoryTeller.Remotes.Messaging
{
    public static class EventAggregator
    {
        private static readonly BlockingCollection<object> _messages;
        private static CancellationTokenSource _cancellationSource;
        private static readonly IMessagingHub _messaging = new MessagingHub();
        private static ISocketConnection _sockets;

        static EventAggregator()
        {
            _messages = new BlockingCollection<object>(new ConcurrentQueue<object>());
        }

        public static IMessagingHub Messaging => _messaging;

        public static void Start(ISocketConnection sockets)
        {
            // only start once
            if (_sockets != null) return;

            _sockets = sockets;
            _cancellationSource = new CancellationTokenSource();
            Task.Factory.StartNew(read, _cancellationSource.Token);
        }

        private static void read()
        {
            foreach (object o in _messages.GetConsumingEnumerable(_cancellationSource.Token))
            {
                var json = JsonSerialization.ToJson(o);
                _sockets.SendMessage(json);
            }
        }

        public static void Stop()
        {
            _cancellationSource?.Cancel();
        }


        public static void SendMessage<T>(T message)
        {
            try
            {
                _messages.Add(message);
                _messaging.Send(message);
            }
            catch (Exception e)
            {
                // THIS IS IMPORTANT, NO FAILURES CAN POSSIBLY GET OUT HERE
                ConsoleWriter.Write(ConsoleColor.Yellow, e.ToString());
            }
        }

        public class ResponseExpression
        {
            private readonly Action _sendAction;

            public ResponseExpression(Action sendAction)
            {
                _sendAction = sendAction;
            }

            public Task<T> AndWaitFor<T>()
            {
                var watcher = new ResponseWatcher<T>(_messaging);
                _messaging.AddListener(watcher);

                _sendAction();

                return watcher.Task;
            }
        }

        public static ResponseExpression Send<T>(T message)
        {
            return new ResponseExpression(() => SendMessage(message));
        }
    }

    public class ResponseWatcher<T> : IListener<T>
    {
        private readonly IMessagingHub _messaging;
        private readonly TaskCompletionSource<T> _task;

        public ResponseWatcher(IMessagingHub messaging)
        {
            _messaging = messaging;
            _task = new TaskCompletionSource<T>();
        }

        public Task<T> Task => _task.Task;

        public void Receive(T message)
        {
            _task.SetResult(message);
            _messaging.RemoveListener(this);
        }
    }
}