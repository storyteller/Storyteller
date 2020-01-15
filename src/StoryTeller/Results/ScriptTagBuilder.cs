using StoryTeller.Engine;
using StoryTeller.Util;

namespace StoryTeller.Results
{
    public class ScriptTagBuilder : HtmlTag, IDocumentBuilder
    {
        public ScriptTagBuilder(IDocumentPartLoader loader)
            : base("script")
        {
            this.Attr("language", "javascript");
            this.Text("\n\n" + loader.Read() + "\n\n");
            this.Encoded(false);
        }

        public void Apply(HtmlDocument document, BatchRunResponse results)
        {
            document.Body.Append(this);
        }
    }
}
