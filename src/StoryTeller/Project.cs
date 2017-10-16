using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using Baseline;
using Oakton;
using StoryTeller.Engine;
using StoryTeller.Remotes;

namespace StoryTeller
{

#if NET46
    [Serializable]
#endif
    [Obsolete("Getting rid of this")]
    public class Project
    {
        public static int StartingPort = 2499;

        public static string CurrentProfile => CurrentProject?.Profile;

        public static int CurrentMaxRetries => CurrentProject?.MaxRetries ?? 0;



        public int TimeoutInSeconds { get; set; }
        public string TracingStyle { get; set; }
        public string ConfigFile { get; set; }
        public string Profile { get; set; }
        public static Project CurrentProject { get; set; } = new Project();
        public int MaxRetries { get; set; }
        public string Culture { get; set; }
        
        public Dictionary<string, string> Properties { get; set; } = new Dictionary<string, string>();

        public EngineMode Mode { get; set; } = EngineMode.Interactive;

        public StopConditions StopConditions = new StopConditions();

        public Project()
        {
            Port = PortFinder.FindPort(++StartingPort);

            Framework = "netcoreapp1.0";
        }

        public int Port { get; set; }

        public string ProjectPath { get; set; }
        public string BuildProfile { get; set; }
        public string Framework { get; set; }


    }
}
