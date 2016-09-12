using System.Threading.Tasks;
using StoryTeller.Engine;
using ST.Client;
using Xunit;

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
                ProjectPath = TestingContext.FindParallelDirectory("Storyteller.Gallery")
            };

            var system = new NulloSystem();

            var controller = new RemoteController(project, new LocalLauncher(project, system));
            var recycled = await controller.Start();

            recycled.ShouldNotBeNull();

            controller.Teardown();
        }
    }


}