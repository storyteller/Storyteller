using System;
using FubuCore;
using FubuCore.CommandLine;
using StoryTeller.Execution;
using StoryTeller.Workspace;

namespace StoryTeller.CommandLine
{
    [CommandDescription("Run a suite of StoryTeller tests")]
    public class RunCommand : FubuCommand<RunInput>
    {
        public RunCommand()
        {
            Usage("Execute").Arguments(x => x.Path);
            Usage("Execute and save results").Arguments(x => x.Path, x => x.ResultsPath);
        }

        public override bool Execute(RunInput input)
        {
            var project = input.LoadProject();

            var runner = new ProjectRunner(new Project[]{project}, input.ResultsPath);
            if (input.WorkspaceFlag.IsNotEmpty())
            {
                Console.WriteLine("Using workspace " + input.WorkspaceFlag);
                runner.Workspace = input.WorkspaceFlag;
            }

            if (input.LifecycleFlag.HasValue)
            {
                Console.WriteLine("For tests with lifecycle: {0}", input.LifecycleFlag.Value);
                runner.DesiredLifecycle = input.LifecycleFlag;
            }

            return runner.Execute() == 0;
        }
    }
}