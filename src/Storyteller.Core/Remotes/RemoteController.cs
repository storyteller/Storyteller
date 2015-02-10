using System;
using System.IO;
using System.Threading.Tasks;
using FubuCore;
using Storyteller.Core.Remotes.Messaging;

namespace Storyteller.Core.Remotes
{
    public class RemoteController : IDisposable
    {
        private readonly RemoteDomainExpression _remoteSetup = new RemoteDomainExpression();
        private AppDomain _domain;
        private RemoteProxy _proxy;
        private MessagingHub _messaging;
        private readonly Project _project;
        private readonly string _path;

        public RemoteController(string path)
        {
            _remoteSetup.ServiceDirectory = path;
            _project = Project.LoadForFolder(path);
            _path = path;
        }

        public Project Project
        {
            get { return _project; }
        }

        public string Path
        {
            get { return _path; }
        }

        public string ConfigFile
        {
            get
            {
                return _remoteSetup.Setup.ConfigurationFile;
            }
            set { _remoteSetup.Setup.ConfigurationFile = value; }
        }

        public string BinPath
        {
            get { return _remoteSetup.Setup.PrivateBinPath; }
            set { _remoteSetup.Setup.PrivateBinPath = value; }
        }

        public void UseBuildProfile(string profile)
        {
            _remoteSetup.BuildProfile = profile;
        }

        public Task<SystemRecycled> Start(EngineMode mode)
        {
            copyStorytellerAssemblyIfNecessary();

            _domain = AppDomain.CreateDomain("Storyteller-SpecRunning-Domain", null, _remoteSetup.Setup);
            var proxyType = typeof (RemoteProxy);
            _proxy = (RemoteProxy)_domain.CreateInstanceAndUnwrap(proxyType.Assembly.FullName, proxyType.FullName);


            _messaging = new MessagingHub();

            var listener = new SystemRecycledListener();
            _messaging.AddListener(listener);
            _messaging.AddListener(this);

            _proxy.Start(EngineMode.Batch, _project, new RemoteListener(_messaging));


            return listener.Task;
        }

        private void copyStorytellerAssemblyIfNecessary()
        {
            var directory = _remoteSetup.Setup.ApplicationBase.AppendPath(BinPath);
            var fileName = GetType().Assembly.GetName().Name + ".dll";
            var file = directory.AppendPath(fileName);
            if (!File.Exists(file))
            {
                File.Copy(GetType().Assembly.Location, file);
            }

        }

        

        public MessagingHub Messaging
        {
            get { return _messaging; }
        }

        public void Dispose()
        {
            if (_proxy != null)
            {
                _proxy.Dispose();
            }

            if (_domain != null)
            {
                AppDomain.Unload(_domain);   
            }
        }

        public void SendMessage<T>(T message)
        {
            var json = JsonSerialization.ToJson(message);
            _proxy.SendMessage(json);
        }

        public class ResponseExpression
        {
            private readonly Action _sendAction;
            private readonly MessagingHub _messaging;

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

        public ResponseExpression Send<T>(T message)
        {
            return new ResponseExpression(() => SendMessage(message), _messaging);
        }
    }
}