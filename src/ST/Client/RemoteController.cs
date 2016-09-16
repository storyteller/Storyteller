using System;
using System.IO;
using System.Threading.Tasks;
using FubuCore;
using FubuCore.CommandLine;
using FubuMVC.Core.Services.Remote;
using StoryTeller;
using StoryTeller.Messages;
using StoryTeller.Model.Persistence;
using StoryTeller.Remotes;
using StoryTeller.Remotes.Messaging;
using RemoteDomainExpression = StoryTeller.Remotes.RemoteDomainExpression;

namespace ST.Client
{
    public interface IRemoteController
    {
        void SendJsonMessage(string json);
        void AddListener(object listener);
        void Recycle();
        void SendMessage<T>(T message);
        RemoteController.ResponseExpression Send<T>(T message);
        QueueState QueueState();
        string WebSocketAddress { get; set; }
    }

    public class RemoteController : IDisposable, IRemoteController
    {
        private readonly string _path;
        private readonly Project _project;
        private readonly RemoteDomainExpression _remoteSetup = new RemoteDomainExpression();
        private AppDomain _domain;
        private readonly MessagingHub _messaging;
        private RemoteProxy _proxy;
        private AppDomainFileChangeWatcher _watcher;
        private EngineMode _mode = EngineMode.Interactive;

        public RemoteController(string path)
        {
            _remoteSetup.ServiceDirectory = path;
            _project = Project.LoadForFolder(path);
            _path = path;
            _messaging = new MessagingHub();

            _messaging.AddListener(this);
        }

        public QueueState QueueState()
        {
            if (_proxy == null) return new QueueState();

            return _proxy.QueueState();
        }

        public Project Project => _project;

        public string Path => _path;

        public string WebSocketAddress { get; set; }

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

        public MessagingHub Messaging => _messaging;

        public void Dispose()
        {
            _watcher?.Dispose();

            _proxy?.Dispose();

            if (_domain != null)
            {
                AppDomain.Unload(_domain);
            }
        }

        public void UseBuildProfile(string profile)
        {
            _remoteSetup.BuildProfile = profile;
        }

        public void Recycle()
        {
            _messaging.Send(new SystemRecycleStarted());

            Teardown();

            _messaging.Send(new QueueState());

            bootstrap(_mode).Task.ContinueWith(x =>
            {
                _messaging.Send(x.Result);

                LatestSystemRecycled = x.Result;

                return x.Result;
            });
        }

        public SystemRecycled LatestSystemRecycled { get; private set; }
        public bool DisableAppDomainFileWatching { get; set; }

        public void Teardown()
        {
            if (_proxy == null || _domain == null) return;

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
            var listener = new SystemRecycledListener(_messaging);

            copyStorytellerAssemblyIfNecessary();

            _domain = AppDomain.CreateDomain("Storyteller-SpecRunning-Domain", null, _remoteSetup.Setup);


            try
            {
                Type proxyType = typeof(RemoteProxy);
                _proxy = (RemoteProxy)_domain.CreateInstanceAndUnwrap(proxyType.Assembly.FullName, proxyType.FullName);

                _messaging.AddListener(listener);
                _proxy.Start(mode, _project, new RemoteListener(_messaging));
            }
            catch (Exception)
            {
                ConsoleWriter.Write(ConsoleColor.Yellow, "Storyteller was unable to start an AppDomain for the specification project. Check that the project has already been compiled.");

                throw;
            }

            

            return listener;
        }

        private void copyStorytellerAssemblyIfNecessary()
        {
            string directory = _remoteSetup.Setup.ApplicationBase.AppendPath(BinPath);
            string fileName = GetType().Assembly.GetName().Name + ".dll";
            string file = directory.AppendPath(fileName);
            if (!File.Exists(file))
            {
                File.Copy(GetType().Assembly.Location, file);
            }
        }


        public void SendMessage<T>(T message)
        {
            string json = JsonSerialization.ToJson(message);
            _proxy.SendMessage(json);
        }

        public ResponseExpression Send<T>(T message)
        {
            return new ResponseExpression(() => SendMessage(message), _messaging);
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

        public void SendJsonMessage(string json)
        {
            _proxy.SendMessage(json);
        }

        public void AddListener(object listener)
        {
            _messaging.AddListener(listener);
        }
    }
}