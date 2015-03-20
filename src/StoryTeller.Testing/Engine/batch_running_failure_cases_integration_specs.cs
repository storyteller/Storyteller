using System;
using System.Linq;
using FubuCore;
using NUnit.Framework;
using ST.CommandLine;
using StoryTeller.Engine;
using StoryTeller.Remotes;
using StoryTeller.Results;

namespace StoryTeller.Testing.Engine
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

        [Test]
        public void spec_will_fail_if_the_system_blows_up_while_trying_to_create_an_execution_context()
        {
            // See GrammarSystem.CreateContext() to understand why this 
            // input will cause the system to become invalid
            var response = execute(x =>
            {
                x.ProfileFlag = "blowup";
                x.TimeoutFlag = 5;
            });

            // There are 23 specs in the sample project
            response.records.Length.ShouldEqual(23);

            var first = response.records.Single(x => !x.results.WasAborted);
            

            // first one does run, just fails
            first.results.WasAborted.ShouldBeFalse();

            var contextCreationError = first.results.Results.OfType<StepResult>().Single();

            first.results.Counts.ShouldEqual(0, 0, 1, 0);
            contextCreationError.position.ShouldEqual("context");
            contextCreationError.error.ShouldContain("I blew up trying to create an execution context");

        }
    }
}