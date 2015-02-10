using System.ComponentModel;

namespace StoryTeller.CommandLine
{
    public class RunInput : ProjectInput
    {
        [Description("Path to write out the results")]
        public string ResultsPath { get; set; }

        [Description("Optional.  Runs only one workspace")]
        public string WorkspaceFlag { get; set; }


    }
}