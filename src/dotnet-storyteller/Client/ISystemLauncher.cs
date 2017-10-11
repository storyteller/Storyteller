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
        void Start(IEngineController remoteController);
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

        public void Start(IEngineController remoteController)
        {
            _agent = new StorytellerAgent(_project.Port, _system);
            _agent.Receive(new StartProject {Project = _project});
        }
    }


}
