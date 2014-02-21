using System;
using System.ComponentModel;
using System.Linq;
using FubuCore.CommandLine;
using StoryTeller.Domain;
using StoryTeller.Execution;
using StoryTeller.ProjectUtils;

namespace StoryTeller.CommandLine
{
    [CommandDescription("Writes names of suites to the console")]
    public class ListSuitesCommand : FubuCommand<ListSuitesInput>
    {
        public override bool Execute(ListSuitesInput input)
        {
            var project = ProjectLoader.Load(input.Path, input.CompileFlag, null);

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

    public class ListSuitesInput 
    {
        public ListSuitesInput()
        {
            LifecycleFlag = Lifecycle.Any;
        }

        [Description("Path to the StoryTeller project file or the project directory")]
        public string Path { get; set; }

        [Description("Specify a compile target")]
        public string CompileFlag { get; set; }

        [Description("Optional. Only runs tests with desired lifecyle")]
        public Lifecycle LifecycleFlag { get; set; }
    }
}