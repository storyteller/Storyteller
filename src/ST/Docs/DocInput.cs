using System;
using System.ComponentModel;
using System.IO;
using FubuCore;
using FubuCore.CommandLine;

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

        public DocSettings ToSettings()
        {
            if (!Directory.Exists(DirectoryFlag))
            {
                throw new Exception("Could not find requested documentation folder " + DirectoryFlag);
            }

            return new DocSettings
            {
                Root = DirectoryFlag.ToFullPath(),
                Version = VersionFlag,
                UrlStyle = UrlStyle.Live,
                SampleDirectories = CodeFlag
            };
        }
    }
}