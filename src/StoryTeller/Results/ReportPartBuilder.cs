using StoryTeller.Engine;
using StoryTeller.Remotes.Messaging;
using StoryTeller.Util;

namespace StoryTeller.Results
{
    public class ReportPartBuilder : IDocumentBuilder
    {
        public void Apply(HtmlDocument document, BatchRunResponse results)
        {
            var cleanJson = JsonSerialization.ToCleanJson(results);

            document.Body.Add("div").Id("batch-data").Text(cleanJson).Hide();
            document.Body.Add("div").Id("main");
        }
    }
}
