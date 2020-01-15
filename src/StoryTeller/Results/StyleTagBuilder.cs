using System.Collections.Generic;
using System.Linq;
using Baseline;
using StoryTeller.Engine;
using StoryTeller.Util;

namespace StoryTeller.Results
{
    public class StyleTagBuilder : HtmlTag, IDocumentBuilder
    {                
        public StyleTagBuilder(IDocumentPartLoader loader)            
            : base("style")
        {
            this.Text(loader.Read());
            this.Encoded(false);
        }

        public void Apply(HtmlDocument document, BatchRunResponse results)
        {
            document.Head.Append(this);                
        }
    }
}
