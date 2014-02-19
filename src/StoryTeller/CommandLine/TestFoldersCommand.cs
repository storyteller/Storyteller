using System;
using System.ComponentModel;
using System.IO;
using System.Linq;
using FubuCore;
using FubuCore.CommandLine;
using StoryTeller.Domain;
using StoryTeller.Execution;

namespace StoryTeller.CommandLine
{
    [CommandDescription("Writes names of the folders in the Tests directory to a file")]
    public class TestFoldersCommand : FubuCommand<TestFoldersInput>
    {
        public override bool Execute(TestFoldersInput input)
        {
            var project = input.LoadProject();

            var runner = new ProjectTestRunner(project);
            var suites = runner.Hierarchy.GetRootSuites
                .Where(x => HasDesiredLifecycle(x, input.LifecycleFlag))
                .Select(x => x.Name)
                .ToList();

            suites.ForEach(Console.WriteLine);

            return true;
        }

        private bool HasDesiredLifecycle(Suite suite, Lifecycle lifecycle)
        {
            var tests = suite.GetAllTests();
            return (lifecycle == Lifecycle.Any) || tests.Any(t => t.Lifecycle == lifecycle);
        }
    }

    public class TestFoldersInput : RunInput
    {
    }
}