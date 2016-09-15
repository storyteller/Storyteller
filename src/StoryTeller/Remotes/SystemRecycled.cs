using System;
using System.Collections.Generic;
using System.Linq;
using Baseline;
using StoryTeller.Messages;
using StoryTeller.Model;

namespace StoryTeller.Remotes
{
    public class SystemRecycled : ClientMessage
    {
        private readonly IList<FixtureModel> _fixtures = new List<FixtureModel>();
        public string error;
        public IDictionary<string, object> properties = new Dictionary<string, object>();
        public bool success;
        public string system_full_name;

        public string system_name;
        public string time = DateTime.Now.ToString("t");

        public SystemRecycled() : base("system-recycled")
        {
#if NET46
            properties.Add("ConfigFile", AppDomain.CurrentDomain.SetupInformation.ConfigurationFile);
            properties.Add("BaseDirectory", AppDomain.CurrentDomain.BaseDirectory.ToFullPath());
            properties.Add("BinPath", AppDomain.CurrentDomain.SetupInformation.PrivateBinPath);
#endif
            properties.Add("Profile", Project.CurrentProfile);
        }

        public FixtureModel[] fixtures
        {
            get { return _fixtures.ToArray(); }
            set
            {
                _fixtures.Clear();
                _fixtures.AddRange(value);
            }
        }

        public string name { get; set; }

        public void WriteSystemUsage()
        {
            Console.WriteLine("Using System: " + system_name);
            properties.Each(pair =>
            {
                if (pair.Value != null)
                {
                    Console.WriteLine("{0}: {1}", pair.Key, pair.Value);
                }
            });
            Console.WriteLine();
        }
    }
}