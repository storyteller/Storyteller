﻿using System;
using System.Linq;
using IntegrationTests.CommandLine;
using Shouldly;
using StoryTeller.Commands;
using StoryTeller.Engine;
using StoryTeller.Results;
using ST.CommandLine;
using Xunit;

namespace IntegrationTests
{
    
    public class batch_running_failure_cases_integration_specs : IDisposable
    {
        public batch_running_failure_cases_integration_specs()
        {
            TestUtility.CleanUpHangingProcesses();
        }

        private BatchRunResponse execute(Action<RunInput> configure)
        {
            var path = TestingContext.FindParallelDirectory("Storyteller.Samples");


            var input = new RunInput
            {
                Path = path
            };

            configure(input);

            var controller = input.BuildEngine();
            var task = controller.Start().ContinueWith(t =>
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

            controller.Dispose();

            return task.Result.Result;
        }

        // Not reliable enough for CI
        public void spec_fails_with_timeout()
        {
            var response = execute(x =>
            {
                x.ProfileFlag = "slow";
                x.TimeoutFlag = 5;
                x.TeamCityTracingFlag = true;
            });

            var record = response.records.FirstOrDefault(x => x.specification.id == "SometimesSlow");

            record.results.Counts.ShouldEqual(0, 0, 1, 0);
            var result = record.results.Results.Single().ShouldBeOfType<StepResult>();
            result.position.ShouldBe(Stage.timedout.ToString());

            // At the specification level
            result.id.ShouldBe("SometimesSlow");
            result.error.ShouldContain("Timed out in");

        }

        [Fact]
        public void spec_will_fail_if_the_system_blows_up_while_trying_to_create_an_execution_context()
        {
            // See GrammarSystem.CreateContext() to understand why this 
            // input will cause the system to become invalid
            var response = execute(x =>
            {
                x.ProfileFlag = "blowup";
                x.TimeoutFlag = 5;
            });

            // There are 23 Specifications in the sample project
            response.records.Length.ShouldBe(24);

            var first = response.records.Single(x => !x.results.WasAborted);
            

            // first one does run, just fails
            first.results.WasAborted.ShouldBe(false);

            var contextCreationError = first.results.Results.OfType<StepResult>().Single();

            first.results.Counts.ShouldEqual(0, 0, 1, 0);
            contextCreationError.position.ShouldBe("context");
            contextCreationError.error.ShouldContain("I blew up trying to create an execution context");

        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                TestUtility.CleanUpHangingProcesses();
            }
        }

        public void Dispose()
        {
            Dispose(true);
        }
    }
}