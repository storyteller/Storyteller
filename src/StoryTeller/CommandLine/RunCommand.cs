using System;
using System.Collections.Generic;
using FubuCore;
using FubuCore.CommandLine;
using StoryTeller.Domain;
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

            if (input.LifecycleFlag.IsNotEmpty())
            {
                Lifecycle lifecycle;
                if (!Enum.TryParse(input.LifecycleFlag, out lifecycle))
                {
                    Console.WriteLine("'{0}' is not a valid lifecycle. [Valid options are: {1}]", input.LifecycleFlag, Enum.GetNames(typeof (Lifecycle)).Join(", "));
                    return false;
                }

                Console.WriteLine("For tests with lifecycle: {0}", lifecycle);
                runner.DesiredLifecycle = lifecycle;
            }

            return runner.Execute() == 0;
        }
    }
}