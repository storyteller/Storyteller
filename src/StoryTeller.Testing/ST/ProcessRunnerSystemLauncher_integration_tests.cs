using System;
using System.Threading.Tasks;
using StoryTeller.Remotes;
using ST.Client;
using Xunit;

namespace StoryTeller.Testing.ST
{
    public class ProcessRunnerSystemLauncher_integration_tests : IDisposable
    {
        private Project _project;
        private RemoteController _controller;

        private Task<SystemRecycled> start(string projectName)
        {
            _project = new Project
            {
                ProjectPath = TestingContext.FindParallelDirectory(projectName)
            };

            _controller = new RemoteController(_project, new ProcessRunnerSystemLauncher(_project));

            return _controller.Start();
        }

        public void Dispose()
        {
            _controller.Teardown();
        }

        [Fact]
        public async Task start_happy_path()
        {
            var recycled = await start("Storyteller.Gallery");

            recycled.ShouldNotBeNull();
        }
    }
}