using System;
using Baseline;
using Oakton;
using StoryTeller;
using StoryTeller.Engine;
using StoryTeller.Messages;
using StoryTeller.Remotes;

namespace ST.Client
{
    public interface ISystemLauncher
    {
        void AssertValid();
        void Teardown();

        // TODO -- make this return a Task<SystemRecycled>
        void Start();
    }

    public class LocalLauncher : ISystemLauncher
    {
        private StorytellerAgent _agent;
        private readonly Project _project;
        private readonly ISystem _system;

        public LocalLauncher(Project project, ISystem system)
        {
            _project = project;
            _system = system;
        }

        public void AssertValid()
        {
            // Nothing
        }

        public void Teardown()
        {
            _agent.Receive(new Shutdown());
        }

        public void Start()
        {
            _agent = new StorytellerAgent(_project.Port, _system);
            _agent.Receive(new StartProject {Project = _project});
        }
    }

#if NET46
    public class AppDomainSystemLauncher : ISystemLauncher
    {
        private readonly RemoteDomainExpression _remoteSetup = new RemoteDomainExpression();
        private AppDomain _domain;
        private RemoteProxy _proxy;
        private readonly Project _project;

        public AppDomainSystemLauncher(Project project)
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

        public void Start()
        {
            _domain = AppDomain.CreateDomain("Storyteller-SpecRunning-Domain", null, _remoteSetup.Setup);


            try
            {
                var proxyType = typeof(RemoteProxy);
                _proxy = (RemoteProxy)_domain.CreateInstanceAndUnwrap(proxyType.Assembly.FullName, proxyType.FullName);

                _proxy.Start(_project);
            }
            catch (Exception)
            {
                ConsoleWriter.Write(ConsoleColor.Yellow,
                    "Storyteller was unable to start an AppDomain for the specification project. Check that the project has already been compiled.");

                throw;
            }
        }
    }


#endif
}