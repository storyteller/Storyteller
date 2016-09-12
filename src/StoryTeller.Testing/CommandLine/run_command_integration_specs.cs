using System;
using System.Linq;
using Baseline;
using Xunit;
using Shouldly;
using ST.Client;
using ST.CommandLine;
using StoryTeller.Model;
using StoryTeller.Remotes;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Testing.CommandLine
{
    
    public class run_command_integration_specs : IDisposable
    {
        private RunInput theInput;
        private RemoteController theController;
        private FixtureModel[] theFixtures;

        public run_command_integration_specs()
        {
            var directory = TestingContext.FindParallelDirectory("Storyteller.Samples");


            var project = Project.LoadForFolder(directory);
#if NET46       
            theController = new RemoteController(project, new AppDomainSystemLauncher(project));
#else
            throw new NotImplementedException("Not done yet for CoreCLR");
#endif

            theInput = new RunInput { Path = directory, RetriesFlag = 1 };
            theController = theInput.BuildRemoteController();
            var task = theController.Start();
            task.Wait(3.Seconds());

            theFixtures = task.Result.fixtures;
        }


        public void Dispose()
        {
            theController.Dispose();
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

        [Fact]
        public void use_specific_system_in_multi_system_project()
        {
            var directory = TestingContext.FindParallelDirectory("MultipleSystems");


            var input = new RunInput {Path = directory, SystemNameFlag = "System2"};
            var multiSystemController = input.BuildRemoteController();
            var task = multiSystemController.Start();
            task.Wait(3.Seconds());

            task.Result.system_name.ShouldBe("MultipleSystems.System2");
            multiSystemController.Dispose();
        }
    }
}
