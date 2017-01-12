using System;
using System.Threading.Tasks;
using Baseline;
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

#if NET46
        [Fact] 
        public void start_a_remote_system_that_blows_up_fast()
        {
            var recycled = start("BlowsUp");

            recycled.Wait(3.Seconds());

            recycled.Result.success.ShouldBeFalse();
            recycled.Result.error.ShouldContain("Unable to start process");

        }
#endif
    }
}