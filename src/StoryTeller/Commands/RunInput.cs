using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Baseline;
using Oakton;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Model.Persistence.DSL;

namespace StoryTeller.Commands
{
    public class RunInput : StorytellerInput
    {
        [Description("If specified, only executes a single suite or specification")]
        public string SpecificationOrSuite { get; set; }
        
        [Description("Optional. Only runs tests with desired lifecyle")]
        public Lifecycle LifecycleFlag { get; set; } = Lifecycle.Any;

        [Description("Choose")]
        public TracingStyle TracingFlag { get; set; } = TracingStyle.None;


        [Description("Global timeout for this command in minutes. Defaults to 10")]
        public int TimeoutFlag { get; set; } = 10;
        
        [Description("Open the results in a browser after the run. DO NOT DO THIS IN CI!")]
        public bool OpenFlag { get; set; }
        
        [Description("WriteToText the performance data in CSV format to the specified path")]
        public string CsvFlag { get; set; }

        [Description("WriteToText the raw result information to JSON format at the specified path")]
        public string JsonFlag { get; set; }

        [Description("Dump the raw JSON history of the batch run to the specified path")]
        public string DumpFlag { get; set; }
        
        
        [Description("Path to write out the results. Default is stresults.htm")]
        public string ResultsPathFlag { get; set; } = "stresults.htm";
        
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

                return FixtureLoader.SelectFixturePath(Path.ToFullPath());
            }
        }
        
        // TODO -- put stop conditions here too
        // TODO -- profile
        // TODO -- props!
        // TODO -- flag to open the results in the browser afterward

        public Task<List<Specification>> ReadSpecs()
        {
            return Task.Factory.StartNew(() =>
            {
                var top = HierarchyLoader.ReadHierarchy(SpecPath);
                // TODO -- filter on tags here
                // TODO -- make HierarchyLoader smart enough to recognize spec or suite
                return HierarchyLoader.Filter(top, LifecycleFlag, SpecificationOrSuite, new string[0]).ToList();
            });
        }
    }
}