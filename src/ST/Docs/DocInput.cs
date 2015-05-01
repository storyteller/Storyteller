using System.ComponentModel;

namespace ST.Docs
{
    public class DocInput
    {
        public DocInput()
        {
            DirectoryFlag = "documentation";
            CodeFlag = new string[]{"src"};
        }

        [Description("The documentation directory. The default is 'documentation'")]
        public string DirectoryFlag { get; set; }

        [Description("Override the application version. Default is 'Unknown'")]
        public string VersionFlag { get; set; }

        [Description("Override the directories where sample scanning should be enabled. Default is [src]")]
        public string[] CodeFlag { get; set; }
    }
}