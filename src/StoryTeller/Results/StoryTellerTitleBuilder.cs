using Baseline;
using StoryTeller.Engine;
using StoryTeller.Util;

namespace StoryTeller.Results
{
    /// <summary>
    /// Builds the storyteller title using values from the <see cref="BatchRunResponse"/>.
    /// </summary>
    public class StoryTellerTitleBuilder : IDocumentBuilder
    {
        /// <summary>
        /// Sets the Title property on the <see cref="HtmlDocument"/> being generated.
        /// </summary>
        /// <param name="document">The current document being modified.</param>
        /// <param name="results">The results of the storyteller run.</param>
        public void Apply(HtmlDocument document, BatchRunResponse results)
        {
            document.Title = "Storyteller Batch Results for {0}: {1}".ToFormat(results.system, results.suite);
        }
    }
}
