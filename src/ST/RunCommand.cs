using System;
using System.ComponentModel;
using FubuCore.CommandLine;
using FubuCore;
using StoryTeller.Execution;

namespace ST
{
    public class RunInput
    {
        [Description("Path to the StoryTeller project file")]
        public string ProjectFile { get; set; }

        [Description("Path to write out the results")]
        public string ResultsFile { get; set; }

        [Description("Optional.  Runs only one workspace")]
        public string WorkspaceFlag { get; set; }
    }

    [CommandDescription("Run a suite of StoryTeller tests")]
    public class RunCommand : FubuCommand<RunInput>
    {
        public override bool Execute(RunInput input)
        {
            var runner = new ProjectRunner(new string[]{input.ProjectFile}, input.ResultsFile);
            if (input.WorkspaceFlag.IsNotEmpty())
            {
                Console.WriteLine("Using workspace " + input.WorkspaceFlag);
                runner.Workspace = input.WorkspaceFlag;
            }

            runner.Execute();

            return true;
        }
    }
}