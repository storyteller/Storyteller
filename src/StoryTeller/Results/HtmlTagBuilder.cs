using StoryTeller.Engine;
using StoryTeller.Util;

namespace StoryTeller.Results
{
    /// <summary>
    /// Simplifies the <see cref="IDocumentBuilder"/> implementation by allowing
    /// to build tags that register themselves to the <see cref="HtmlDocument"/> report.
    /// </summary>
    public abstract class HtmlTagBuilder : HtmlTag, IDocumentBuilder
    {
        /// <summary>
        /// Creates an instance of <see cref="HtmlTagBuilder"/>.
        /// </summary>
        /// <param name="tag">The tag name that is being created.</param>
        protected HtmlTagBuilder(string tag) : base(tag, (HtmlTag) null)
        {
        }

        /// <summary>
        /// EAppends this <see cref="HtmlTag"/> to current document.
        /// </summary>
        /// <param name="document">The current document being modified.</param>
        /// <param name="results">The results of the storyteller run.</param>
        public void Apply(HtmlDocument document, BatchRunResponse results)
        {
            this.AttachTo(document).Append(this);                
        }

        /// <summary>
        /// Selects the element from the document to be used as the target of
        /// the append function.
        /// </summary>
        /// <param name="document"></param>
        /// <returns></returns>
        protected virtual HtmlTag AttachTo(HtmlDocument document) => document.Body;
    }
}
