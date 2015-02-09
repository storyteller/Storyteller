using System;
using System.Threading.Tasks;
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

        public RemoteController(string path)
        {
            _remoteSetup.ServiceDirectory = path;
            _project = Project.LoadForFolder(path);
        }

        public Project Project
        {
            get { return _project; }
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
            _domain = AppDomain.CreateDomain("Storyteller-SpecRunning-Domain", null, _remoteSetup.Setup);
            var proxyType = typeof (RemoteProxy);
            _proxy = (RemoteProxy)_domain.CreateInstanceAndUnwrap(proxyType.Assembly.FullName, proxyType.FullName);


            _messaging = new MessagingHub();

            var listener = new SystemRecycledListener();
            _messaging.AddListener(listener);
            _messaging.AddListener(this);

            _proxy.Start(mode, _project, new RemoteListener(_messaging));


            return listener.Task;
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
    }
}