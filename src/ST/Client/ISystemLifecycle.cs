using System;
using Baseline;
using Oakton;
using StoryTeller;
using StoryTeller.Messages;
using StoryTeller.Remotes;

namespace ST.Client
{
    public interface ISystemLifecycle
    {
        void AssertValid();
        void Teardown();
        QueueState QueueState();
        void Start(EngineMode mode);
    }

#if NET46
    public class AppDomainSystemLifecycle : ISystemLifecycle
    {
        private readonly RemoteDomainExpression _remoteSetup = new RemoteDomainExpression();
        private AppDomain _domain;
        private RemoteProxy _proxy;
        private readonly Project _project;

        public AppDomainSystemLifecycle(Project project)
        {
            _remoteSetup.Port = project.Port;
            _remoteSetup.ServiceDirectory = project.ProjectPath;

            _project = project;

            if (project.BuildProfile.IsNotEmpty())
            {
                _remoteSetup.BuildProfile = project.BuildProfile;
            }

            if (project.ConfigFile.IsNotEmpty())
            {
                _remoteSetup.Setup.ConfigurationFile = project.ConfigFile;
            }
        }

        public void AssertValid()
        {
            if (_remoteSetup.Setup.PrivateBinPath.IsEmpty())
            {
                throw new Exception(
                    "Could not determine any BinPath for the testing AppDomain. Has the Storyteller specification project been compiled, \nor is Storyteller using the wrong compilation target maybe?\n\ntype 'st.exe ? open' or st.exe ? run' to see the command usages\n\n");
            }
        }

        public void Teardown()
        {
            if ((_proxy == null) || (_domain == null)) return;

            _proxy.Dispose();

            if (_domain != null)
            {
                AppDomain.Unload(_domain);
                _domain = null;
            }
        }

        public QueueState QueueState()
        {
            if (_proxy == null) return new QueueState();

            return _proxy.QueueState();
        }

        public void Start(EngineMode mode)
        {
            _domain = AppDomain.CreateDomain("Storyteller-SpecRunning-Domain", null, _remoteSetup.Setup);


            try
            {
                var proxyType = typeof(RemoteProxy);
                _proxy = (RemoteProxy)_domain.CreateInstanceAndUnwrap(proxyType.Assembly.FullName, proxyType.FullName);

                _proxy.Start(mode, _project, _project.Port);
            }
            catch (Exception)
            {
                ConsoleWriter.Write(ConsoleColor.Yellow,
                    "Storyteller was unable to start an AppDomain for the specification project. Check that the project has already been compiled.");

                throw;
            }
        }
    }


#else
    public class ProcessRunnerSystemLifecycle : ISystemLifecycle
    {
        public ProcessRunnerSystemLifecycle(Project project)
        {
        }

        public void AssertValid()
        {
            throw new NotImplementedException();
        }

        public void Teardown()
        {
            throw new NotImplementedException();
        }

        public QueueState QueueState()
        {
            throw new NotImplementedException();
        }

        public void Start(EngineMode mode)
        {
            throw new NotImplementedException();
        }
    }
#endif
}