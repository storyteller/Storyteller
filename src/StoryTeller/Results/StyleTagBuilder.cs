using System.Collections.Generic;
using System.Linq;
using StoryTeller.Grammars.Paragraphs;
using StoryTeller.Util;

namespace StoryTeller.Results
{
    /// <summary>
    /// A self attaching style tag used for building the <see cref="HtmlDocument"/>.  
    /// </summary>
    public class StyleTagBuilder : HtmlTagBuilder, IDocumentBuilder
    {                
        /// <summary>
        /// Creates an instance of a <see cref="StyleTagBuilder"/>. 
        /// </summary>
        /// <param name="loader">A <see cref="IDocumentBuilder"/> with CSS content.</param>
        public StyleTagBuilder(IDocumentPartLoader loader)            
            : base("style")
        {
            this.Text(loader.Read());
            this.Encoded(false);
        }

        /// <summary>
        /// Creates an instance of a <see cref="StyleTagBuilder"/>.   
        /// </summary>
        /// <param name="content">A CSS string.</param>
        public StyleTagBuilder(string content)
            : this(new VirtualFileLoader(content))
        {
        }

        /// <summary>
        /// Selects the Head html element as the target of this <see cref="IDocumentBuilder"/>
        /// </summary>
        /// <param name="document">The<see  cref="HtmlDocument"/> being modified.</param>
        /// <returns>The <see cref="HtmlTag"/> to append the builder content.</returns>
        protected override HtmlTag AttachTo(HtmlDocument document) => document.Head;
        
    }
}
