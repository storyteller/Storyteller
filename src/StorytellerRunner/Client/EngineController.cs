using System;
using System.Threading.Tasks;
using Baseline;
using StoryTeller;
using StoryTeller.Messages;
using StoryTeller.Remotes;
using StoryTeller.Remotes.Messaging;

namespace ST.Client
{
    public class EngineController : IDisposable, IEngineController
    {
        public static int Port = 2500;
        private readonly ISystemLauncher _launcher;
        private readonly HttpConnection _socket;

        private AppDomainFileChangeWatcher _watcher;

        public EngineController(Project project, ISystemLauncher launcher)
        {
            _launcher = launcher;
            Project = project;


            Messaging = EventAggregator.Messaging;

            _socket = new HttpConnection(Project.Port + 1, Project.Port, json =>
            {
                Messaging.SendJson(json);
            });
            

            Messaging.AddListener(this);
            Messaging.AddListener(launcher);
        }

        public Project Project { get; }

        public IMessagingHub Messaging { get; }

        public SystemRecycled LatestSystemRecycled { get; private set; }

        public void Dispose()
        {
            _watcher?.Dispose();

            _launcher.Teardown();

            _socket?.Dispose();
        }

        public string WebSocketAddress { get; set; }

        public Task<SystemRecycled> Recycle()
        {
            Messaging.Send(new SystemRecycleStarted());

            Teardown();

            Messaging.Send(new QueueState());

            return bootstrap().Task.ContinueWith(x =>
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
            _launcher.Teardown();
        }

        public Task<SystemRecycled> Start()
        {
            var listener = bootstrap();


            return listener.Task.ContinueWith(x =>
            {
                if (!DisableAppDomainFileWatching)
                {
                    _watcher = new AppDomainFileChangeWatcher(() => Recycle());
                    _watcher.WatchBinariesAt(Project.ProjectPath.AppendPath("bin"));
                }

                LatestSystemRecycled = x.Result;

                return x.Result;
            });
        }

        private SystemRecycledListener bootstrap()
        {
            var listener = new SystemRecycledListener(Messaging);

            Messaging.AddListener(listener);

            _launcher.Start(this);

            return listener;
        }

        public void AssertValid()
        {
            _launcher.AssertValid();
        }
    }
}