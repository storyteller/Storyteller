using System;
using System.IO;
using System.Xml;
using Newtonsoft.Json;
using Storyteller.Core.Model;

namespace Storyteller.Core.Persistence
{
    public class HierarchyLoader
    {
        public static SpecNode ReadSpecNode(string filename)
        {

            using (var stream = new FileStream(filename, FileMode.Open, FileAccess.Read))
            {
                var reader = XmlReader.Create(stream);
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

    public class Hierarchy
    {
        public Suite[] suites;
    }

    public class Suite
    {
        public Suite[] suites;
        public SpecNode[] specs;
    }

    public class SpecNode
    {
        public string name;
        public string path;
        public string lifecycle;
        public string id;

        [JsonIgnore]
        public string filename;
    }
}