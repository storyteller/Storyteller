using System;
using System.Collections.Generic;
using System.IO;
using Baseline;
using Oakton;
using StoryTeller.Engine;
using StoryTeller.Model.Persistence;

namespace StoryTeller.Commands
{
    public interface IStorytellerEnvironment
    {
        /// <summary>
        /// Optional user-supplied profile. May be null.
        /// Same as Project.CurrentProfile
        /// </summary>
        string Profile { get; }
        
        /// <summary>
        /// Optional user-supplied key/value properties
        /// </summary>
        Dictionary<string, string> Properties { get; }
        
        /// <summary>
        /// The directory to the root of the project
        /// </summary>
        string RootPath { get; }
        
        /// <summary>
        /// Directory containing the specifications
        /// </summary>
        string SpecPath { get; }
    }
    
    
    public class StorytellerInput : IStorytellerEnvironment
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
        
        [FlagAlias('y')]
        [Description("Optional, override the root directory of the project. Should be very rarely used")]
        public string PathFlag { get; set; }
        
        
        [Description("Key/Value data for customized system construction")]
        public Dictionary<string, string> PropFlag { get; set; } = new Dictionary<string, string>();
        
        [Description("Storyteller Profile for conditional system construction")]
        public string ProfileFlag { get; set; }
        
        [Description("Force Storyteller to use this culture in all value conversions")]
        public string CultureFlag { get; set; }


        string IStorytellerEnvironment.Profile => ProfileFlag;
        Dictionary<string, string> IStorytellerEnvironment.Properties => PropFlag ?? new Dictionary<string, string>();
        string IStorytellerEnvironment.RootPath => PathFlag;

        public string SpecPath => SpecsFlag.IsNotEmpty() 
            ? SpecsFlag.ToFullPath() 
            : HierarchyLoader.SelectSpecPath(PathFlag.ToFullPath());
    }
    
    
}