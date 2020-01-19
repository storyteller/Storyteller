using System;
using StoryTeller.Engine;
using StoryTeller.Util;

namespace StoryTeller.Results
{
    /// <summary>
    /// A self attaching script tag used for building the <see cref="HtmlDocument"/>.  
    /// </summary>
    public class ScriptTagBuilder : HtmlTagBuilder
    {
        /// <summary>
        /// Creates an instance of a <see cref="ScriptTagBuilder"/>. 
        /// </summary>
        /// <param name="loader">A <see cref="IDocumentPartBuilder"/> with script content.</param>
        /// <param name="language">The language being defined in the script tag.  Defaults to "javascript".</param>
        public ScriptTagBuilder(IDocumentPartLoader loader, string language ="javascript")
            : base("script")
        {
            this.Attr("language", language);
            this.Text("\n\n" + loader.Read() + "\n\n");
            this.Encoded(false);
        }

        /// <summary>
        /// Creates an instance of a <see cref="StyleTagBuilder"/>.   
        /// </summary>
        /// <param name="content">A script content string.</param>
        /// <param name="language">The language being defined in the script tag.  Defaults to "javascript".</param>
        public ScriptTagBuilder(string content, string language = "javascript")
            : this(new VirtualFileLoader(content), language)
        {
        }

        /// <summary>
        /// Creates an instance of a <see cref="StyleTagBuilder"/>.
        /// </summary>
        /// <param name="path">The url to the script resource.</param>
        /// <param name="language">The language being defined in the script tag.  Defaults to "javascript".</param>
        public ScriptTagBuilder(Uri path, string language = "javascript")
            : base("script")
        {
            this.Attr("language", language);
            this.Attr("src", path);
        }
    }
}
