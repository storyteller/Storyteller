using System.ComponentModel;

namespace ST.Docs
{
    public class DocInput
    {
        public DocInput()
        {
            DirectoryFlag = "documentation";
        }

        [Description("The documentation directory. The default is 'documentation'")]
        public string DirectoryFlag { get; set; }

        [Description("Override the application version. Default is 'Unknown'")]
        public string VersionFlag { get; set; }
    }
}