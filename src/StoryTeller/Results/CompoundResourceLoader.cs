using System.Collections.Generic;
using System.Linq;
using Baseline;

namespace StoryTeller.Results
{
    /// <summary>
    /// Joins multiple <see cref="IDocumentPartLoader"/> contents into a single resource.
    /// </summary>
    public class CompoundResourceLoader : IDocumentPartLoader
    {
        private readonly string delimiter;
        private List<IDocumentPartLoader> sources;

        /// <summary>
        /// Creates an instance of <see cref="CompoundResourceLoader"/>.
        /// </summary>
        /// <param name="delimiter">The join delimiter. Default is two new lines.</param>
        public CompoundResourceLoader(string delimiter = "\n\n")
        {
            this.delimiter = delimiter;
            this.sources = new List<IDocumentPartLoader>();
        }

        /// <summary>
        /// Add a loader to the joined content.
        /// </summary>
        /// <param name="loader"></param>
        /// <returns></returns>
        public CompoundResourceLoader AddLoader(IDocumentPartLoader loader)
        {
            this.sources.Add(loader);
            return this;
        }
        
        /// <summary>
        /// Renders the content of each child into one string.
        /// </summary>
        /// <returns>The text of all child loaders.</returns>
        public string Read()
        {
            return string.Join(this.delimiter, sources.Select(n => n.Read()));
        }
    }
}
