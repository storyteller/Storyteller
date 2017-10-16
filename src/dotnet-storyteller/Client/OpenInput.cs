using System;
using System.IO;
using System.Threading.Tasks;
using Baseline;
using Oakton;
using StoryTeller;
using StoryTeller.Commands;
using StoryTeller.Model.Persistence;
using StoryTeller.Remotes;

namespace ST.Client
{
    public class OpenInput : StorytellerInput
    {
        [Description("Override the .Net target framework if you are multi-targeting")]
        public string FrameworkFlag { get; set; }    
        
        public Task<Suite> ReadHierarchy()
        {
            return Task.Factory.StartNew(() => HierarchyLoader.ReadHierarchy(SpecPath));
        }

        [FlagAlias("hotreload"), Description("Only for Storyteller development itself")]
        public bool HotReloadFlag { get; set; }

        public EngineController BuildEngine()
        {
            var project = new Project
            {
                Framework = FrameworkFlag,
                Culture = CultureFlag,
                Profile = ProfileFlag
            };

            return new EngineController(project, new ProcessRunnerSystemLauncher(project));
        }

        public void CreateMissingSpecFolder()
        {
            if (Directory.Exists(SpecPath)) return;
            
            Console.WriteLine("Creating specifications directory at " + SpecPath);
            Directory.CreateDirectory(SpecPath);
        }
    }
}
