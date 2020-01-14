using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using Baseline;
using StoryTeller.Engine;
using StoryTeller.Util;

namespace StoryTeller.Results
{


    public class ResourceFileLoader : IDocumentPartLoader
    {
        private readonly string name;

        public ResourceFileLoader(string name)
        {
            this.name = name;
        }

        public string Read()
        {
            var assembly = typeof(BatchResultsWriter).GetTypeInfo().Assembly;
            var names = assembly.GetManifestResourceNames();
            var actualName = names.FirstOrDefault(x => x.EqualsIgnoreCase(name));

            var stream = assembly.GetManifestResourceStream(actualName);
            var reader = new StreamReader(stream);
            return reader.ReadToEnd();
        }
    }
}
