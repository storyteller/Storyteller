using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Xml;
using FubuCore;
using Newtonsoft.Json;
using Storyteller.Core.Model;

namespace Storyteller.Core.Persistence
{
    public class HierarchyLoader
    {
        public static readonly IFileSystem FileSystem = new FileSystem();

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
                suites = FileSystem.ChildDirectoriesFor(folder).Select(ReadSuite).ToArray()
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

                return new SpecNode
                {
                    id = reader.GetAttribute("id") ?? Guid.NewGuid().ToString(),
                    name = reader.GetAttribute("name"),
                    lifecycle = reader.GetAttribute("lifecycle") ?? Lifecycle.Acceptance.ToString(),
                    filename = filename
                };
            }
        }
    }


    public class Suite
    {
        public static string JoinPath(string parent, string name)
        {
            return (parent + '/' + name).Trim('/');
        }

        public Suite[] suites;
        public SpecNode[] specs;
        public string name;
        public string path;

        public void WritePath(string parentFolder)
        {
            path = JoinPath(parentFolder, name);

            if (suites != null) suites.Each(x => x.WritePath(path));
            if (specs != null) specs.Each(x => x.WritePath(path));
        }
    }

    public class SpecNode
    {
        public string name;
        public string path;
        public string lifecycle;
        public string id;

        [JsonIgnore]
        public string filename;

        public void WritePath(string parentPath)
        {
            path = Suite.JoinPath(parentPath, name);
        }
    }
}