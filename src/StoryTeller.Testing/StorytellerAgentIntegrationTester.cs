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
        [Fact]
        public async Task can_successfully_start_up_and_get_to_system_recycled()
        {
            var project = new Project
            {
                ProjectPath = TestingContext.FindParallelDirectory("Storyteller.Gallery")
            };

            var system = new NulloSystem();

            var controller = new EngineController(project, new LocalLauncher(project, system));
            var recycled = await controller.Start();

            recycled.ShouldNotBeNull();

            controller.Teardown();
        }

        [Fact]
        public async Task can_successfully_start_up_and_get_to_system_recycled_in_export_only_mode()
        {
            var project = new Project
            {
                ProjectPath = TestingContext.FindParallelDirectory("Storyteller.Gallery"),
                Mode = EngineMode.ExportOnly
            };

            var system = new NulloSystem();

            var controller = new EngineController(project, new LocalLauncher(project, system));
            var recycled = await controller.Start();

            recycled.ShouldNotBeNull();

            controller.Teardown();
        }
    }


}