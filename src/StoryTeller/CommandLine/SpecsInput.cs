using System.ComponentModel;

namespace StoryTeller.CommandLine
{
    public class SpecsInput : RunInput
    {
        [Description("Descriptive title for the html summary")]
        public string TitleFlag { get; set; }


        [Description("Open the index file after generation")]
        public bool OpenFlag { get; set; }
    }
}