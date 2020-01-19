using StoryTeller.Engine;
using StoryTeller.Remotes.Messaging;
using StoryTeller.Util;

namespace StoryTeller.Results
{
    /// <summary>
    /// Renders the report content to the <see cref="HtmlDocument"/>
    /// </summary>
    public class ReportPartBuilder : IDocumentPartBuilder
    {
        /// <summary>
        /// Appends the cleaned json of the <see cref="BatchRunRequest"/> document and
        /// creates the #main div element for the report container.
        /// </summary>
        /// <param name="document">The current document being modified.</param>
        /// <param name="results">The results of the storyteller run.</param>
        public void Apply(HtmlDocument document, BatchRunResponse results)
        {
            var cleanJson = JsonSerialization.ToCleanJson(results);

            document.Body.Add("div").Id("batch-data").Text(cleanJson).Hide();
            document.Body.Add("div").Id("main");
        }
    }
}
