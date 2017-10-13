using System.Threading.Tasks;
using StoryTeller.Commands;
using StoryTeller.Engine;
using StoryTeller.Remotes;
using ST.Client;
using Xunit;
using EngineController = ST.Client.EngineController;

namespace StoryTeller.Testing
{
    public class LocalLauncher : ISystemLauncher
    {
        private AgentCommand _agent;
        private readonly Project _project;
        private readonly ISystem _system;

        public LocalLauncher(Project project, ISystem system)
        {
            _project = project;
            _system = system;
            
            _agent = new AgentCommand();
            _agent.Execute(new AgentInput
            {
                System = _system
            });
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
            _agent = new AgentCommand();
            _agent.Receive(new StartProject {Project = _project});
        }
    }

    
    public class StorytellerAgentIntegrationTester
    {
        
    }


}