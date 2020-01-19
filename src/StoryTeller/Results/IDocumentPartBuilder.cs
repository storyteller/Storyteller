using StoryTeller.Engine;
using StoryTeller.Util;

namespace StoryTeller.Results
{
    /// <summary>
    /// A component for building <see cref="HtmlDocument"/> reports. 
    /// </summary>
    public interface IDocumentPartBuilder
    {
        /// <summary>
        /// Executes logic that modifies the <see cref="HtmlDocument"/> being generated.
        /// </summary>
        /// <param name="document">The current document being modified.</param>
        /// <param name="results">The results of the storyteller run.</param>
        void Apply(HtmlDocument document, BatchRunResponse results);
    }
}
