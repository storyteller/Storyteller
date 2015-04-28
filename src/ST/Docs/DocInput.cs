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
    }
}