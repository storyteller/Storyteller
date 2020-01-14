using System.Collections.Generic;
using System.Linq;
using Baseline;
using StoryTeller.Engine;
using StoryTeller.Util;

namespace StoryTeller.Results
{
    public class StyleTagBuilder : IDocumentBuilder
    {
        private readonly IEnumerable<IDocumentPartLoader> loaders;

        public StyleTagBuilder(IDocumentPartLoader loader)
            : this(new[] { loader })
        {

        }
        public StyleTagBuilder(IEnumerable<IDocumentPartLoader> loaders)
        {
            this.loaders = loaders;
        }

        public void Apply(HtmlDocument document, BatchRunResponse results)
        {
            var css = string.Join("\n\n", loaders.Select(n => n.Read()));
            document.Head.Append(new HtmlTag("style").Text(css).Encoded(false));
        }
    }
}
