using System.Threading.Tasks;
using StoryTeller.Engine;
using StoryTeller.Remotes;
using ST.Client;
using Xunit;
using EngineController = ST.Client.EngineController;

namespace StoryTeller.Testing
{
    public class StorytellerAgentIntegrationTester
    {
        public StorytellerAgentIntegrationTester()
        {
            
        }

        [Fact]
        public async Task can_successfully_start_up_and_get_to_system_recycled()
        {
            var project = new Project
            {
                ProjectPath = TestingContext.FindParallelDirectory("StoryTeller.Gallery")
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
                ProjectPath = TestingContext.FindParallelDirectory("StoryTeller.Gallery"),
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