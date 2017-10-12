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
            Path = Environment.CurrentDirectory;
#else
            Path = Directory.GetCurrentDirectory();
#endif
        }
        
        [Description("Optional. Override the spec directory")]
        [FlagAlias("specs", 's')]
        public string SpecsFlag { get; set; }

        [IgnoreOnCommandLine]
        public ISystem System { get; set; }
        
        public string Path { get; }

        
        public string SpecPath => SpecsFlag.IsNotEmpty() 
            ? SpecsFlag.ToFullPath() 
            : HierarchyLoader.SelectSpecPath(Path.ToFullPath());
    }
}