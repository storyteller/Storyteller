using System;
using System.Linq;
using Baseline;
using Baseline.Dates;
using Shouldly;
using StoryTeller;
using StoryTeller.Commands;
using StoryTeller.Model;
using StoryTeller.Remotes.Messaging;
using ST.Client;
using ST.CommandLine;
using Xunit;

namespace IntegrationTests.CommandLine
{
    public class run_command_integration_specs : IDisposable
    {
        private readonly RunInput theInput;
        private readonly EngineController theController;
        private readonly FixtureModel[] theFixtures;

        public run_command_integration_specs()
        {
            TestUtility.CleanUpHangingProcesses();

            var directory = TestingContext.FindParallelDirectory("Storyteller.Samples");


            var project = Project.LoadForFolder(directory);

            theController = new EngineController(project, new ProcessRunnerSystemLauncher(project));


            theInput = new RunInput { Path = directory, RetriesFlag = 1 };
            theController = theInput.BuildEngine();
            var task = theController.Start();
            task.Wait(3.Seconds());

            theFixtures = task.Result.fixtures;
        }


        public void Dispose()
        {
            theController.Dispose();

            TestUtility.CleanUpHangingProcesses();
        }

        [Fact]
        public void the_project_max_attempts_should_be_set_from_retries_flag()
        {
            theController.Project.MaxRetries.ShouldBe(1);
        }

        [Fact]
        public void filter_by_regression_lifecycle()
        {
            theInput.LifecycleFlag = Lifecycle.Regression;

            var task = theInput.StartBatch(theController);
            task.Wait(1.Seconds());

            var result = task.Result;

            result.records.OrderBy(x => x.specification.id).Select(x => x.specification.id)
                .ShouldHaveTheSameElementsAs("embeds", "paragraph1", "sentence2");
        }

        [Fact]
        public void filter_by_acceptance_lifecycle()
        {
            theInput.LifecycleFlag = Lifecycle.Acceptance;

            var task = theInput.StartBatch(theController);
            task.Wait(1.Seconds());

            var result = task.Result;

            result.records.Any(x => x.specification.id == "embeds").ShouldBe(false);
            result.records.Any(x => x.specification.id == "paragraph1").ShouldBe(false);
            result.records.Any(x => x.specification.id == "sentence2").ShouldBe(false);
        }

        [Fact]
        public void filter_by_suite()
        {
            theInput.WorkspaceFlag = "Sentences";

            var task = theInput.StartBatch(theController);
            task.Wait(1.Seconds());

            var result = task.Result;

            result.records.OrderBy(x => x.specification.id).Select(x => x.specification.id)
                .ShouldHaveTheSameElementsAs("sentence1", "sentence2", "sentence3", "sentence4");
        }

        [Fact]
        public void filter_by_both_suite_and_lifecycle()
        {
            theInput.WorkspaceFlag = "Sentences";
            theInput.LifecycleFlag = Lifecycle.Regression;

            var task = theInput.StartBatch(theController);
            task.Wait(1.Seconds());

            var result = task.Result;

            result.records.OrderBy(x => x.specification.id).Select(x => x.specification.id)
                .ShouldHaveTheSameElementsAs("sentence2");
        }

        [Fact]
        public void record_data_for_client()
        {
            var task = theInput.StartBatch(theController);
            task.Wait(3.Seconds());

            var result = task.Result;

            result.fixtures = theFixtures;

            if (theFixtures == null) throw new Exception("Cannot be null dammit");

            var json = JsonSerialization.ToIndentedJson(result);

            var clientPath = TestingContext.FindClientFolder();


            new FileSystem().WriteStringToFile(clientPath.AppendPath("batch-result-data.js"), "module.exports = " + json);
        }

    }
}
