using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Xml;
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
        public string DetermineFramework()
        {
            if (FrameworkFlag.IsNotEmpty()) return FrameworkFlag;

            var projectFile = new FileSystem().FindFiles(PathFlag, FileSet.Shallow("*.csproj")).FirstOrDefault();
            if (projectFile == null) throw new InvalidOperationException($"Cannot find a csproj file in directory {PathFlag}. Try explicitly setting the --framework flag value");

            var document = new XmlDocument();
            using (var file = new FileStream(projectFile, FileMode.Open))
            {
                document.Load(file);
            }

            var elements = document.DocumentElement.GetElementsByTagName("TargetFrameworks");
            if (elements.Count == 0)
            {
                elements = document.DocumentElement.GetElementsByTagName("TargetFramework");
            }
            
            if (elements.Count == 0) throw new InvalidOperationException("Unable to determine the project target framework. Try explicitly setting the --framework flag");

            var element = elements[0];

            return element.InnerText.ToDelimitedArray(';').First();
        }
        
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
