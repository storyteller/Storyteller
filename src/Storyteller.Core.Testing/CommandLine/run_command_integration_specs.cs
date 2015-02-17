using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using FubuCore;
using FubuTestingSupport;
using NUnit.Framework;
using Storyteller.Core.CommandLine;
using Storyteller.Core.Model;
using Storyteller.Core.Remotes;

namespace Storyteller.Core.Testing.CommandLine
{
    [TestFixture]
    public class run_command_integration_specs
    {
        private RunInput theInput;
        private RemoteController theController;

        [SetUp]
        public void SetUp()
        {
            var directory = ".".ToFullPath().ParentDirectory().ParentDirectory().ParentDirectory()
                .AppendPath("Storyteller.Samples");

            theController = new RemoteController(directory);

            theInput = new RunInput {Path = directory};
            theController = theInput.BuildRemoteController();
            theController.Start(EngineMode.Batch);
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

            result.results.OrderBy(x => x.node.id).Select(x => x.node.id)
                .ShouldHaveTheSameElementsAs("embeds", "paragraph1", "sentence2");
        }

        [Test]
        public void filter_by_acceptance_lifecycle()
        {
            theInput.LifecycleFlag = Lifecycle.Acceptance;

            var task = theInput.StartBatch(theController);
            task.Wait(1.Seconds());

            var result = task.Result;

            result.results.Any(x => x.node.id == "embeds").ShouldBeFalse();
            result.results.Any(x => x.node.id == "paragraph1").ShouldBeFalse();
            result.results.Any(x => x.node.id == "sentence2").ShouldBeFalse();
        }

        [Test]
        public void filter_by_suite()
        {
            theInput.WorkspaceFlag = "Sentences";

            var task = theInput.StartBatch(theController);
            task.Wait();

            var result = task.Result;

            result.results.OrderBy(x => x.node.id).Select(x => x.node.id)
                .ShouldHaveTheSameElementsAs("sentence1", "sentence2", "sentence3", "sentence4");
        }

        [Test]
        public void filter_by_both_suite_and_lifecycle()
        {
            theInput.WorkspaceFlag = "Sentences";
            theInput.LifecycleFlag = Lifecycle.Regression;

            var task = theInput.StartBatch(theController);
            task.Wait();

            var result = task.Result;

            result.results.OrderBy(x => x.node.id).Select(x => x.node.id)
                .ShouldHaveTheSameElementsAs("sentence2");
        }
    }
}