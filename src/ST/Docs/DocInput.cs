using System;
using System.Collections.Generic;
using System.IO;
using FubuCore;
using Oakton;

namespace ST.Docs
{
    public class DocInput
    {
        public DocInput()
        {
            DirectoryFlag = "documentation";
            CodeFlag = new List<string>() {"src"};
        }

        [Description("The documentation directory. The default is 'documentation'")]
        public string DirectoryFlag { get; set; }

        [Description("Override the application version. Default is 'Unknown'")]
        public string VersionFlag { get; set; }

        [Description("GitHub project name when exporting to project pages of a GitHub repo")]
        public string ProjectFlag { get; set; }

        [Description("Override the directories where sample scanning should be enabled. Default is [src]")]
        public List<string> CodeFlag { get; set; }



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
                SampleDirectories = CodeFlag,
                ProjectName = ProjectFlag
            };
        }
    }
}