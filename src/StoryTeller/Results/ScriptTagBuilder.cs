using StoryTeller.Engine;
using StoryTeller.Util;

namespace StoryTeller.Results
{
    public class ScriptTagBuilder : IDocumentBuilder
    {
        private readonly IDocumentPartLoader loader;

        public ScriptTagBuilder(IDocumentPartLoader loader)
        {
            this.loader = loader;
        }

        public void Apply(HtmlDocument document, BatchRunResponse results)
        {
            var js = loader.Read();
            document.Body.Add("script").Attr("language", "javascript").Text("\n\n" + js + "\n\n").Encoded(false);
        }
    }
}
