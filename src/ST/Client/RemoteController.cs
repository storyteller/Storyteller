using System;
using System.IO;
using System.Threading.Tasks;
using Baseline;
using Oakton;
using StoryTeller;
using StoryTeller.Messages;
using StoryTeller.Remotes;
using StoryTeller.Remotes.Messaging;

namespace ST.Client
{
    public interface IRemoteController
    {
        string WebSocketAddress { get; set; }
        void SendJsonMessage(string json);
        void AddListener(object listener);
        void Recycle();
        void SendMessage<T>(T message);
        RemoteController.ResponseExpression Send<T>(T message);
        QueueState QueueState();
    }

    public class RemoteController : IDisposable, IRemoteController
    {
        private readonly ISystemLifecycle _lifecycle;
        public static int Port = 2500;

        private EngineMode _mode = EngineMode.Interactive;
        private AppDomainFileChangeWatcher _watcher;
        private readonly SocketConnection _socket;

        public RemoteController(Project project, ISystemLifecycle lifecycle)
        {
            _lifecycle = lifecycle;
            Project = project;


            Messaging = new MessagingHub();

            _socket = new SocketConnection(Project.Port, true, (s, json) =>
            {
                Messaging.SendJson(json);
            });

            Messaging.AddListener(this);
        }

        public Project Project { get; }

        public MessagingHub Messaging { get; }

        public SystemRecycled LatestSystemRecycled { get; private set; }

        public void Dispose()
        {
            _watcher?.Dispose();

            _lifecycle.Teardown();


        }

        // TODO -- move to being a Task<QueueState>
        public QueueState QueueState()
        {
            return _lifecycle.QueueState();
        }

        public string WebSocketAddress { get; set; }

        public void Recycle()
        {
            Messaging.Send(new SystemRecycleStarted());

            Teardown();

            Messaging.Send(new QueueState());

            bootstrap(_mode).Task.ContinueWith(x =>
            {
                Messaging.Send(x.Result);

                LatestSystemRecycled = x.Result;

                return x.Result;
            });
        }

        public bool DisableAppDomainFileWatching { get; set; }

        public void SendMessage<T>(T message)
        {
            var json = JsonSerialization.ToJson(message);
            _socket.SendMessage(json);
        }

        public ResponseExpression Send<T>(T message)
        {
            return new ResponseExpression(() => SendMessage(message), Messaging);
        }

        public void SendJsonMessage(string json)
        {
            _socket.SendMessage(json);
        }

        public void AddListener(object listener)
        {
            Messaging.AddListener(listener);
        }

        public void Teardown()
        {
            _lifecycle.Teardown();
        }

        public Task<SystemRecycled> Start(EngineMode mode)
        {
            _mode = mode;

            var listener = bootstrap(mode);


            return listener.Task.ContinueWith(x =>
            {
                if (!DisableAppDomainFileWatching)
                {
                    _watcher = new AppDomainFileChangeWatcher(Recycle);
                    _watcher.WatchBinariesAt(Project.ProjectPath.AppendPath("bin"));
                }

                LatestSystemRecycled = x.Result;

                return x.Result;
            });
        }

        private SystemRecycledListener bootstrap(EngineMode mode)
        {
            var listener = new SystemRecycledListener(Messaging);

            Messaging.AddListener(listener);

            _lifecycle.Start(mode);




            return listener;
        }


        public class ResponseExpression
        {
            private readonly MessagingHub _messaging;
            private readonly Action _sendAction;

            public ResponseExpression(Action sendAction, MessagingHub messaging)
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

        public void AssertValid()
        {
            _lifecycle.AssertValid();
        }
    }
}