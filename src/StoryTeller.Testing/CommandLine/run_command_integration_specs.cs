using System;
using System.Linq;
using FubuCore;
using NUnit.Framework;
using Shouldly;
using ST.CommandLine;
using StoryTeller.Model;
using StoryTeller.Remotes;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Testing.CommandLine
{
    [TestFixture]
    public class run_command_integration_specs
    {
        private RunInput theInput;
        private RemoteController theController;
        private FixtureModel[] theFixtures;

        [SetUp]
        public void SetUp()
        {
            var directory = ".".ToFullPath().ParentDirectory().ParentDirectory().ParentDirectory()
                .AppendPath("Storyteller.Samples");

            theController = new RemoteController(directory);

            theInput = new RunInput {Path = directory};
            theController = theInput.BuildRemoteController();
            var task = theController.Start(EngineMode.Batch);
            task.Wait(3.Seconds());

            theFixtures = task.Result.fixtures;
        }

        [TearDown]
        public void TearDown()
        {
            theController.Dispose();
        }

        [Test]
        public void filter_by_regression_lifecycle()
        {
            theInput.LifecycleFlag = Lifecycle.Regression;

            var task = theInput.StartBatch(theController);
            task.Wait(1.Seconds());

            var result = task.Result;

            result.records.OrderBy(x => x.header.id).Select(x => x.header.id)
                .ShouldHaveTheSameElementsAs("embeds", "paragraph1", "sentence2");
        }

        [Test]
        public void filter_by_acceptance_lifecycle()
        {
            theInput.LifecycleFlag = Lifecycle.Acceptance;

            var task = theInput.StartBatch(theController);
            task.Wait(1.Seconds());

            var result = task.Result;

            result.records.Any(x => x.header.id == "embeds").ShouldBe(false);
            result.records.Any(x => x.header.id == "paragraph1").ShouldBe(false);
            result.records.Any(x => x.header.id == "sentence2").ShouldBe(false);
        }

        [Test]
        public void filter_by_suite()
        {
            theInput.WorkspaceFlag = "Sentences";

            var task = theInput.StartBatch(theController);
            task.Wait(1.Seconds());

            var result = task.Result;

            result.records.OrderBy(x => x.header.id).Select(x => x.header.id)
                .ShouldHaveTheSameElementsAs("sentence1", "sentence2", "sentence3", "sentence4");
        }

        [Test]
        public void filter_by_both_suite_and_lifecycle()
        {
            theInput.WorkspaceFlag = "Sentences";
            theInput.LifecycleFlag = Lifecycle.Regression;

            var task = theInput.StartBatch(theController);
            task.Wait(1.Seconds());

            var result = task.Result;

            result.records.OrderBy(x => x.header.id).Select(x => x.header.id)
                .ShouldHaveTheSameElementsAs("sentence2");
        }

        [Test]
        public void record_data_for_client()
        {
            var task = theInput.StartBatch(theController);
            task.Wait(3.Seconds());

            var result = task.Result;

            result.fixtures = theFixtures;

            if (theFixtures == null) throw new Exception("Cannot be null dammit");

            var json = JsonSerialization.ToIndentedJson(result);

            new FileSystem().WriteStringToFile("batch-result-data.js", "module.exports = " + json);
        }
    }
}