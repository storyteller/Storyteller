using System;
using System.Threading.Tasks;
using IntegrationTests.CommandLine;
using Shouldly;
using StoryTeller;
using StoryTeller.Remotes;
using ST.Client;
using Xunit;

namespace IntegrationTests
{
    public class ProcessRunnerSystemLauncher_integration_tests : IDisposable
    {
        private Project _project;
        private EngineController _controller;

        public ProcessRunnerSystemLauncher_integration_tests()
        {
            TestUtility.CleanUpHangingProcesses();
        }

        private Task<SystemRecycled> start(string projectName)
        {
            _project = new Project
            {
                ProjectPath = TestingContext.FindParallelDirectory(projectName)
            };

            _controller = new EngineController(_project, new ProcessRunnerSystemLauncher(_project));

            return _controller.Start();
        }

        public void Dispose()
        {
            _controller.Teardown();

            TestUtility.CleanUpHangingProcesses();
        }

        [Fact]
        public async Task start_happy_path()
        {
            var recycled = await start("Storyteller.Gallery");

            ShouldBeBooleanExtensions.ShouldBeTrue(recycled.success);
        }

        [Fact]
        public async Task start_and_recycle()
        {
            var recycled = await start("Storyteller.Gallery");

            ShouldBeBooleanExtensions.ShouldBeTrue(recycled.success);

            var recycled2 = await _controller.Recycle();

            ShouldBeBooleanExtensions.ShouldBeTrue(recycled2.success);


        }

        [Fact]
        public async Task start_a_remote_system_that_fails_in_project_start()
        {
            var recycled = await start("BadSystem");

            ShouldBeBooleanExtensions.ShouldBeFalse(recycled.success);
            recycled.error.ShouldContain(nameof(DivideByZeroException));

        }

        [Fact]
        public async Task start_a_remote_system_that_blows_up_fast()
        {
            var recycled = await start("BlowsUp");

            ShouldBeBooleanExtensions.ShouldBeFalse(recycled.success);
            recycled.error.ShouldContain("Unable to start process");

        }
    }
}