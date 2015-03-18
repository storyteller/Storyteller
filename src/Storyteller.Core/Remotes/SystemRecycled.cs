using System;
using System.Collections.Generic;
using System.Linq;
using FubuCore;
using Storyteller.Core.Messages;
using Storyteller.Core.Model;

namespace Storyteller.Core.Remotes
{
    public class SystemRecycled : ClientMessage
    {
        public SystemRecycled() : base("system-recycled")
        {
            properties.Add("ConfigFile", AppDomain.CurrentDomain.SetupInformation.ConfigurationFile);
            properties.Add("BaseDirectory", AppDomain.CurrentDomain.BaseDirectory);
            properties.Add("BinPath", AppDomain.CurrentDomain.SetupInformation.PrivateBinPath);
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
        public string time = DateTime.Now.ToString("t");

        public string system_name;
        public bool success;
        public string error;

        private readonly IList<FixtureModel> _fixtures = new List<FixtureModel>(); 

        public string name { get; set; }
        public IDictionary<string, object> properties = new Dictionary<string, object>();

        public void WriteSystemUsage()
        {
            Console.WriteLine("Using System: " + system_name);
            properties.Each(pair =>
            {
                Console.WriteLine("{0}: {1}", pair.Key, pair.Value);
            });
            Console.WriteLine();
        }
    }
}