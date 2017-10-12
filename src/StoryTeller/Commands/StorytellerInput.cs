using System;
using System.IO;
using Baseline;
using Oakton;
using StoryTeller.Engine;
using StoryTeller.Model.Persistence;

namespace StoryTeller.Commands
{
    public class StorytellerInput
    {
        public StorytellerInput()
        {
#if NET46
            PathFlag = Environment.CurrentDirectory;
#else
            PathFlag = Directory.GetCurrentDirectory();
#endif
        }
        
        [Description("Optional. Override the spec directory")]
        [FlagAlias("specs", 's')]
        public string SpecsFlag { get; set; }

        [IgnoreOnCommandLine]
        public ISystem System { get; set; }
        
        [Description("Optional, override the root directory of the project")]
        public string PathFlag { get; set; }

        
        public string SpecPath => SpecsFlag.IsNotEmpty() 
            ? SpecsFlag.ToFullPath() 
            : HierarchyLoader.SelectSpecPath(PathFlag.ToFullPath());
    }
}