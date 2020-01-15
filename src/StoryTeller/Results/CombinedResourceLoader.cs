using System.Collections.Generic;
using System.Linq;
using Baseline;

namespace StoryTeller.Results
{
    public class CombinedResourceLoader : IDocumentPartLoader
    {
        private readonly string delimiter;
        private List<IDocumentPartLoader> sources;

        public CombinedResourceLoader(string delimiter = "\n\n")
        {
            this.delimiter = delimiter;
            this.sources = new List<IDocumentPartLoader>();
        }

        public CombinedResourceLoader AddFile(IDocumentPartLoader loader)
        {
            this.sources.Add(loader);
            return this;
        }
  
        public string Read()
        {
            return string.Join(this.delimiter, sources.Select(n => n.Read()));
        }
    }
}
