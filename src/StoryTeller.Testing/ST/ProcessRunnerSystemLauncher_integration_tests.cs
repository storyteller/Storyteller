using System;
using System.Globalization;
using System.Threading;
using System.Threading.Tasks;
using Shouldly;
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

            recycled.success.ShouldBeTrue();
        }

        [Fact]
        public async Task start_and_recycle()
        {
            var recycled = await start("Storyteller.Gallery");

            recycled.success.ShouldBeTrue();

            var recycled2 = await _controller.Recycle();

            recycled2.success.ShouldBeTrue();


        }

        [Fact]
        public async Task start_a_remote_system_that_fails_in_project_start()
        {
            var recycled = await start("BadSystem");

            recycled.success.ShouldBeFalse();
            recycled.error.ShouldContain(nameof(DivideByZeroException));

        }

        [Fact]
        public async Task start_a_remote_system_that_blows_up_fast()
        {
            var recycled = await start("BlowsUp");

            recycled.success.ShouldBeFalse();
            recycled.error.ShouldContain("Unable to start process");

        }
    }
}