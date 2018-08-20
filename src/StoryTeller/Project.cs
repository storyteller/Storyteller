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
    public class Project
    {
        public static int StartingPort = 2499;

        public static string CurrentProfile => CurrentProject?.Profile;

        public static int CurrentMaxRetries => CurrentProject?.MaxRetries ?? 0;



        public string Profile { get; set; }
        public static Project CurrentProject { get; set; } = new Project();
        public int MaxRetries { get; set; }
        public string Culture { get; set; }
        
        public Dictionary<string, string> Properties { get; set; } = new Dictionary<string, string>();

        public readonly StopConditions StopConditions = new StopConditions();
        private int _port;

        public int Port
        {
            get
            {
                if (_port == 0)
                {
                    _port = PortFinder.FindPort(++StartingPort);
                }

                return _port;
            }
            set => _port = value;
        }

        public string ProjectPath { get; set; }
        public string Framework { get; set; }
        
        public string ToAgentCommandLine()
        {
            var cmd = $"run --framework {Framework} -- agent {Port}";

            if (Profile.IsNotEmpty()) cmd += $" --profile \"{Profile}\"";

            if (Culture.IsNotEmpty()) cmd += $" --culture {Culture}";

            foreach (var pair in Properties)
            {
                cmd += $" --prop:{pair.Key} \"{pair.Value}\"";
            }

            return cmd;
        }
        
        
        public string ToTestCommandLine()
        {
            var cmd = $"dotnet run --framework {Framework} -- test";

            if (Profile.IsNotEmpty()) cmd += $" --profile \"{Profile}\"";

            if (Culture.IsNotEmpty()) cmd += $" --culture {Culture}";

            foreach (var pair in Properties)
            {
                cmd += $" --prop:{pair.Key} \"{pair.Value}\"";
            }

            return cmd;
        }
    }
}
