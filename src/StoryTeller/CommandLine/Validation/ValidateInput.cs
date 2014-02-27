using System.ComponentModel;

namespace StoryTeller.CommandLine.Validation
{
    public class ValidateInput
    {
        [Description("Path to the StoryTeller project file or the project directory")]
        public string Path { get; set; }

        [Description("Specify a compile target")]
        public string CompileFlag { get; set; }
    }
}