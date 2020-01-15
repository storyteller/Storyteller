using System.IO;
using System.Linq;
using System.Reflection;
using Baseline;

namespace StoryTeller.Results
{
    public class ResourceFileLoader<TAssemblySource> : ResourceFileLoader
        where TAssemblySource : class
    {
        public ResourceFileLoader(string name) : base(name, typeof(TAssemblySource).Assembly)
        {
        }
    }

    public class ResourceFileLoader : IDocumentPartLoader
    {
        private readonly string name;
        private readonly Assembly assembly;

        public ResourceFileLoader(string name, Assembly assembly)
        {
            this.name = name;
            this.assembly = assembly;
        }

        public string Read()
        {   
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
