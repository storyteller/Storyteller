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
        public static int Port = 2500;

        private readonly RemoteDomainExpression _remoteSetup = new RemoteDomainExpression();
        private AppDomain _domain;
        private EngineMode _mode = EngineMode.Interactive;
        private RemoteProxy _proxy;
        private AppDomainFileChangeWatcher _watcher;
        private readonly int _port;
        private readonly SocketConnection _socket;

        public RemoteController(string path)
        {
            _port = PortFinder.FindPort(++Port);
            _remoteSetup.Port = _port;

            _remoteSetup.ServiceDirectory = path;

            

            Project = Project.LoadForFolder(path);
            Path = path;
            Messaging = new MessagingHub();

            _socket = new SocketConnection(_port, true, (s, json) =>
            {
                Messaging.SendJson(json);
            });

            Messaging.AddListener(this);
        }

        public Project Project { get; }

        public string Path { get; }

        public string ConfigFile
        {
            get { return _remoteSetup.Setup.ConfigurationFile; }
            set { _remoteSetup.Setup.ConfigurationFile = value; }
        }

        public string BinPath
        {
            get { return _remoteSetup.Setup.PrivateBinPath; }
            set { _remoteSetup.Setup.PrivateBinPath = value; }
        }

        public MessagingHub Messaging { get; }

        public SystemRecycled LatestSystemRecycled { get; private set; }

        public void Dispose()
        {
            _watcher?.Dispose();

            _proxy?.Dispose();

            if (_domain != null)
                AppDomain.Unload(_domain);
        }

        public QueueState QueueState()
        {
            if (_proxy == null) return new QueueState();

            return _proxy.QueueState();
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

        public void UseBuildProfile(string profile)
        {
            _remoteSetup.BuildProfile = profile;
        }


        public void Teardown()
        {
            if ((_proxy == null) || (_domain == null)) return;

            _proxy.Dispose();

            AppDomain.Unload(_domain);
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
                    _watcher.WatchBinariesAt(_path.AppendPath("bin"));
                }

                LatestSystemRecycled = x.Result;

                return x.Result;
            });
        }

        private SystemRecycledListener bootstrap(EngineMode mode)
        {
            var listener = new SystemRecycledListener(Messaging);

            copyStorytellerAssemblyIfNecessary();

            _domain = AppDomain.CreateDomain("Storyteller-SpecRunning-Domain", null, _remoteSetup.Setup);


            try
            {
                var proxyType = typeof(RemoteProxy);
                _proxy = (RemoteProxy) _domain.CreateInstanceAndUnwrap(proxyType.Assembly.FullName, proxyType.FullName);

                Messaging.AddListener(listener);
                _proxy.Start(mode, Project, _port);
            }
            catch (Exception)
            {
                ConsoleWriter.Write(ConsoleColor.Yellow,
                    "Storyteller was unable to start an AppDomain for the specification project. Check that the project has already been compiled.");

                throw;
            }


            return listener;
        }

        private void copyStorytellerAssemblyIfNecessary()
        {
            var directory = _remoteSetup.Setup.ApplicationBase.AppendPath(BinPath);
            var fileName = GetType().Assembly.GetName().Name + ".dll";
            var file = directory.AppendPath(fileName);
            if (!File.Exists(file))
                File.Copy(GetType().Assembly.Location, file);
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
    }
}