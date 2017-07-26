using System.Collections.Generic;
using System.IO;
using System.Linq;
using Baseline;
using StoryTeller.Engine;
using StoryTeller.Model.Persistence.Markdown;

namespace StoryTeller.Model.Persistence
{
    public class HierarchyLoader
    {
        public static readonly IFileSystem FileSystem = new FileSystem();

        public static string SelectSpecPath(string baseDirectory)
        {
            var specPath = baseDirectory.AppendPath("Specs");
            if (Directory.Exists(specPath)) return specPath;

            var testsPath = baseDirectory.AppendPath("Tests");
            if (Directory.Exists(testsPath))
                return testsPath;

            return specPath;
        }

        public static Suite ReadHierarchy(string folder)
        {
            var suite = ReadSuite(folder);
            suite.name = string.Empty;
            suite.WritePath(string.Empty);

            return suite;
        }

        public static Suite ReadSuite(string folder)
        {
            var suite = new Suite
            {
                name = Path.GetFileName(folder),
                Specifications =
                    FileSystem.FindFiles(folder, FileSet.Shallow("*.md")).Select(MarkdownReader.ReadFromFile).ToArray(),
                Folder = folder
            };

            foreach (var directory in FileSystem.ChildDirectoriesFor(folder))
            {
                suite.AddChildSuite(ReadSuite(directory));
            }

            return suite;
        }
        
        public static List<Specification> Filter(Suite top, Lifecycle lifecycle = Lifecycle.Any, string suiteName = "", string[] tags = default(string[]))
        {
            IEnumerable<Specification> specs;
            if (suiteName.IsNotEmpty())
            {
                var suite = top.suites.FirstOrDefault(x => x.name == suiteName);
                if (suite == null)
                    throw new SuiteNotFoundException(suiteName, top);

                specs = suite.GetAllSpecs();
            }
            else
            {
                specs = top.GetAllSpecs();
            }

            if (lifecycle != Lifecycle.Any)
            {
                specs = specs.Where(x => x.Lifecycle == lifecycle);
            }
            
            if (tags != null && tags.Any())
            {
                specs = specs.Where(spec => tags.All(tag => !spec.Tags.Contains(tag)));
            }

            return specs.ToList();
        }
    }
}