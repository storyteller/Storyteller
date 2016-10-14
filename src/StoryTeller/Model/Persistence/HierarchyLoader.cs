using System.IO;
using System.Linq;
using Baseline;
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
            return new Suite
            {
                name = Path.GetFileName(folder),
                Specifications =
                    FileSystem.FindFiles(folder, FileSet.Shallow("*.md")).Select(MarkdownReader.ReadFromFile).ToArray(),
                suites = FileSystem.ChildDirectoriesFor(folder).Select(ReadSuite).ToArray(),
                Folder = folder
            };
        }
    }
}