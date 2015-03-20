using System;
using System.Linq;
using System.Web.UI.WebControls;
using FubuCore;
using FubuTestingSupport;
using NUnit.Framework;
using ST.CommandLine;
using Storyteller.Core.Engine;
using Storyteller.Core.Remotes;
using Storyteller.Core.Results;

namespace Storyteller.Core.Testing.Engine
{
    [TestFixture]
    public class batch_running_failure_cases_integration_specs
    {
        private BatchRunResponse execute(Action<RunInput> configure)
        {
            var path = ".".ToFullPath().ParentDirectory().ParentDirectory().ParentDirectory()
                .AppendPath("Storyteller.Samples");


            var input = new RunInput
            {
                Path = path
            };

            configure(input);

            var controller = input.BuildRemoteController();
            var task = controller.Start(EngineMode.Batch).ContinueWith(t =>
            {
                var systemRecycled = t.Result;
                if (!systemRecycled.success)
                {
                    systemRecycled.WriteSystemUsage();
                    throw new Exception("Unable to start the system");
                }

                

                return input.StartBatch(controller);

            });

            task.Wait();

            task.Result.Wait();

            return task.Result.Result;
        }

        [Test]
        public void spec_fails_with_timeout()
        {
            var response = execute(x =>
            {
                x.ProfileFlag = "slow";
                x.TimeoutFlag = 5;
            });

            var record = response.records.FirstOrDefault(x => x.header.id == "SometimesSlow");

            record.results.Counts.ShouldEqual(0, 0, 1, 0);
            var result = record.results.Results.Single().ShouldBeOfType<StepResult>();
            result.position.ShouldEqual(Stage.timedout.ToString());

            // At the specification level
            result.id.ShouldEqual("SometimesSlow");
            result.error.ShouldContain("Timed out in");

        }
    }
}