using System.Collections.Generic;
using System.Linq;
using StoryTeller.Engine;
using StoryTeller.Util;

namespace StoryTeller.Results
{
    /// <summary>
    /// The abstract class responsible for assembling html builders against an
    /// <see cref="HtmlDocument"/> object.  The default implementation <see cref="DefaultHtmlDocumentBuilder"/>
    /// is automatically configured in <see cref="BatchResultsWriter"/>.
    /// </summary>
    public abstract class HtmlDocumentBuilder
    {
        private List<IDocumentBuilder> Parts { get; } = new List<IDocumentBuilder>();

        /// <summary>
        /// Creates the HtmlDocument with by applying each individual builder against
        /// the new <see cref="HtmlDocument"/>.
        /// </summary>
        /// <param name="results"></param>
        /// <returns></returns>
        public HtmlDocument Build(BatchRunResponse results)
        {
            var document = new HtmlDocument();
            foreach (var builder in this.Parts)
            {
                builder.Apply(document, results);
            }

            return document;
        }

        /// <summary>
        /// Exposes the internal builders to be consumed. 
        /// </summary>
        /// <typeparam name="TType"></typeparam>
        /// <returns></returns>
        public IEnumerable<TType> Get<TType>()
        {
            return this.Parts.OfType<TType>();
        }
        
        /// <summary>
        /// Adds additional builder to the current builder execution chain.
        /// </summary>
        /// <param name="builder"></param>
        protected void Add(IDocumentBuilder builder)
        {
            this.Parts.Add(builder);
        }
    }
}
