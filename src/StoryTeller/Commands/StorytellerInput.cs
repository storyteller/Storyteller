using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using Baseline;
using Oakton;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Model.Persistence.DSL;
using StoryTeller.Remotes;

namespace StoryTeller.Commands
{
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
        
        [Description("Optional. Override the fixtures directory")]
        [FlagAlias("fixtures", 'f')]
        public string FixturesFlag { get; set; }

        public string FixturePath
        {
            get
            {
                if (FixturesFlag.IsNotEmpty())
                {
                    return FixturesFlag.ToFullPath();
                }

                return FixtureLoader.SelectFixturePath(PathFlag.ToFullPath());
            }
        }


        string IStorytellerEnvironment.Profile => ProfileFlag;
        Dictionary<string, string> IStorytellerEnvironment.Properties => PropFlag ?? new Dictionary<string, string>();
        string IStorytellerEnvironment.RootPath => PathFlag;

        public string SpecPath
        {
            get
            {
                if (SpecsFlag.IsNotEmpty())
                {
                    return SpecsFlag.ToFullPath();
                }
                
                var candidate = HierarchyLoader.SelectSpecPath(PathFlag.ToFullPath());
                if (Directory.Exists(candidate))
                {
                    return candidate;
                }

                
                var path = AppContext.BaseDirectory;
                for (int i = 0; i < 4; i++)
                {
                    var possibility = HierarchyLoader.SelectSpecPath(path);
                    if (Directory.Exists(possibility)) return possibility;

                    path = path.ParentDirectory();
                }

                return candidate;

            }
        }
        
        internal FixtureModel[] BuildFixturesWithOverrides(SystemRecycled systemRecycled)
        {
            var overrides = FixtureLoader.LoadFromPath(FixturePath);
            var system = new FixtureLibrary();
            foreach (var fixture in systemRecycled.fixtures)
            {
                system.Models[fixture.key] = fixture;
            }

            return system.ApplyOverrides(overrides).Models.ToArray();
        }
    }
    
    
}