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
        public bool success;
        public string system_full_name;

        public string system_name;
        public string time = DateTime.Now.ToString("t");

        public SystemRecycled() : base("system-recycled")
        {

        }

        public SystemRecycled CloneWithOverriddenFixtures(FixtureModel[] fixtureArray)
        {
            var clone = new SystemRecycled
            {
                error = error,
                success = success,
                system_full_name = system_full_name,
                time = time,
                name = name,
                system_name = system_name,
                fixtures = fixtureArray
            };



            return clone;
        }
        

        public FixtureModel[] fixtures
        {
            get => _fixtures.ToArray();
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

            Console.WriteLine();
        }
    }
}