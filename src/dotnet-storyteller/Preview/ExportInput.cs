using Oakton;
using StoryTeller.Commands;
using StoryTeller.Remotes;
using ST.CommandLine;

namespace ST.Preview
{
    public class ExportInput : ProjectInput
    {
        public ExportInput() : base(EngineMode.ExportOnly)
        {
        }

        [Description("The file where the html will be written")]
        public string FileFlag { get; set; } = "Specifications.htm";

        [Description("Use to overwrite the title of the exported HTML specs")]
        public string TitleFlag { get; set; } = "Storyteller Specifications";

        [Description("If chosen, try to open the browser to the exported file")]
        public bool OpenFlag { get; set; }
    }
}