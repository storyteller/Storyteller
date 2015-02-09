using System;
using System.Collections.Generic;
using Storyteller.Core.Messages;
using Storyteller.Core.Model;

namespace Storyteller.Core.Remotes
{
    public class SystemRecycled : ClientMessage
    {
        public SystemRecycled() : base("system-recycled")
        {
            Properties.Add("ConfigFile", AppDomain.CurrentDomain.SetupInformation.ConfigurationFile);
            Properties.Add("BaseDirectory", AppDomain.CurrentDomain.BaseDirectory);
            Properties.Add("BinPath", AppDomain.CurrentDomain.SetupInformation.PrivateBinPath);
        }

        public FixtureLibrary library;
        public DateTime time = DateTime.Now;

        public string system_name;
        public bool success;
        public string error;


        public string Name { get; set; }
        public IDictionary<string, object> Properties = new Dictionary<string, object>();
    }
}