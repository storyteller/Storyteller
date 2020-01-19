using System.Linq;
using StoryTeller.Engine;
using StoryTeller.Util;

namespace StoryTeller.Results
{
    public static class BatchResultsWriter
    {
        private static HtmlDocumentBuilder Builder { get; set; } = new DefaultHtmlDocumentBuilder();

        public static HtmlDocument BuildResults(BatchRunResponse results) => Builder.Build(results);
        public static HtmlTag StyleTag() => Builder.Get<StyleTagBuilder>().FirstOrDefault();

        public static void SetBuilder(HtmlDocumentBuilder builder)
        {
            Builder = builder;
        }
        
    }
}
