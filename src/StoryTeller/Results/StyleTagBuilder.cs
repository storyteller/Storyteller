using System.Collections.Generic;
using System.Linq;
using Baseline;
using StoryTeller.Engine;
using StoryTeller.Util;

namespace StoryTeller.Results
{
    public class StyleTagBuilder : IDocumentBuilder
    {
        private readonly IDocumentPartLoader loader;

        public StyleTagBuilder(IDocumentPartLoader loader)            
        {
            this.loader = loader;
        }

        public void Apply(HtmlDocument document, BatchRunResponse results)
        {
            document.Head.Append(new HtmlTag("style")
                .Text(loader.Read())
                .Encoded(false));
        }
    }
}
