using System.IO;
using System.Linq;
using System.Reflection;
using Baseline;

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
            if (actualName == null)
            {
                return string.Empty;
            }

            using (var stream = assembly.GetManifestResourceStream(actualName))
            using (var reader = new StreamReader(stream))
            {
                return reader.ReadToEnd();
            }
        }
    }
}
