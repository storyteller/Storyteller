using System;
using System.Collections.Generic;
using System.Linq;
using Baseline;
using Newtonsoft.Json;

namespace StoryTeller.Model.Persistence
{
    public class Suite
    {
        public static string JoinPath(string parent, string name)
        {
            return (parent + '/' + name).Trim('/');
        }

        public Suite[] suites;

        [JsonIgnore]
        public Specification[] Specifications;

        public string name;
        public string path;

        [JsonIgnore]
        public string Folder;

        public string[] specs
        {
            get { return Specifications.Select(x => x.id).ToArray(); }
        }

        public void WritePath(string parentFolder)
        {
            path = JoinPath(parentFolder, name);

            suites?.Each(x => x.WritePath(path));
            Specifications?.Each(x => x.WritePath(path));
        }

        public Hierarchy ToHierarchy()
        {
            var hierarchy = new Hierarchy
            {
                Top = this
            };

            organizeIntoHierarchy(hierarchy);

            return hierarchy;
        }

        private void organizeIntoHierarchy(Hierarchy hierarchy)
        {
            hierarchy.Suites[path] = this;
            suites.Each(x => x.organizeIntoHierarchy(hierarchy));

            Specifications.Each(x => hierarchy.Specifications[x.id] = x);
        }

        public IEnumerable<Specification> GetAllSpecs()
        {
            return Specifications.Union(suites.SelectMany(x => x.GetAllSpecs()));
        }

        public static string SuitePathOf(string path)
        {
            return path.Split('/').Reverse().Skip(1).Reverse().Join("/");
        }

        public void ReplaceSpecification(Specification spec)
        {
            var index = Array.IndexOf(Specifications, spec);
            if (index > -1)
            {
                Specifications[index] = spec;
            }


        }

        public void AddSpec(Specification spec)
        {
            spec.WritePath(path);
            Specifications = Specifications.Union(new[] {spec}).ToArray();
        }

        public void RemoveSpec(Specification old)
        {
            Specifications = Specifications.Where(x => x != old).ToArray();
        }

        public void AddChildSuite(Suite newSuite)
        {
            suites = suites.Union(new[] {newSuite}).ToArray();
        }
    }
}