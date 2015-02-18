using System;
using System.Diagnostics;
using System.IO;
using System.Linq;
using FubuCore;

namespace Storyteller.Core.Model.Persistence
{
    public class HierarchyLoader
    {
        public static string SpecDirectory = AppDomain.CurrentDomain.BaseDirectory.AppendPath("Specs");

        public static readonly IFileSystem FileSystem = new FileSystem();

        public static Suite ReadHierarchy()
        {
            return ReadHierarchy(SpecDirectory);
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
                specs = FileSystem.FindFiles(folder, FileSet.Shallow("*.xml")).Select(ReadSpecNode).ToArray(),
                suites = FileSystem.ChildDirectoriesFor(folder).Select(ReadSuite).ToArray(),
                Folder = folder
            };
        }

        public static SpecNode ReadSpecNode(string filename)
        {
            using (var stream = new FileStream(filename, FileMode.Open, FileAccess.Read))
            {
                var reader = System.Xml.XmlReader.Create(stream);
                /* TODO: on mono you need to Read otherwise the XmlReader
                 * is in an Initial state, which msdn says means you shouldn't call
                 * ReadToNextSibling. But calling Read progresses the reader forward so
                 * that ReadToNextSibling skips the test without a <?xml> first line...
                 */
                reader.Read();
                if (!(reader.IsStartElement() || reader.Name == "Test" || reader.Name == "Spec"))
                {
                    reader.ReadToNextSibling("*");
                }

                var node = new SpecNode
                {
                    id = reader.GetAttribute("id") ?? Guid.NewGuid().ToString(),
                    name = reader.GetAttribute("name"),
                    lifecycle = reader.GetAttribute("lifecycle") ?? Lifecycle.Acceptance.ToString(),
                    filename = filename
                };

                return node;
            }
        }
    }
}