using System.Collections.Generic;
using System.Linq;
using Baseline;
using Newtonsoft.Json;

namespace StoryTeller.NewEngine
{
    public class Project : IProject
    {
        public static int StartingPort = 2499;
        
        public bool BreakOnExceptions { get; set; }
        public bool BreakOnWrongs { get; set; }
        public int TimeoutInSeconds = 60;
        private bool _cancelled;

        // TODO need a UT on this thing. Put this logic into execution context instead
        public bool CanContinue(Counts counts)
        {
            if (_cancelled) return false;
            if (BreakOnExceptions && counts.Exceptions > 0) return false;
            if (BreakOnWrongs && counts.Wrongs > 0) return false;

            return true;
        }

        
        // TODO -- probably replace this with a master CancellationToken
        public void Cancel()
        {
            _cancelled = true;
        }
        
        
        public string Profile { get; set; }
        
        public int MaxRetries { get; set; }
        public string Culture { get; set; }
        
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
        
        [JsonIgnore] // does not serialize cleanly. Will delete this later.
        public Dictionary<string, string> Properties { get; set; } = new Dictionary<string, string>();

        
        /// <summary>
        /// Json serialization view of things
        /// </summary>
        public string Props
        {
            get { return Properties.Select(x => $"{x.Key}={x.Value}").Join(";"); }
            set
            {
                Properties.Clear();
                if (value.IsEmpty()) return;

                value.Split().Each(x =>
                {
                    var parts = x.Split('=');
                    Properties.Add(parts[0], parts[1]);
                });
            }
        }
        
        public string ProjectPath { get; set; }
        public string SpecDirectory { get; set; }
        public StopConditions StopConditions { get; } = new StopConditions();

        public string Framework { get; set; }
        public bool NoBuild { get; set; }
    }
}
