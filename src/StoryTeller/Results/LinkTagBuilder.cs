using System;
using StoryTeller.Util;

namespace StoryTeller.Results
{
    /// <summary>
    /// A self attaching link tag used for building the <see cref="HtmlDocument"/>.
    /// </summary>
    public class LinkTagBuilder : HtmlTagBuilder
    {
        /// <summary>
        /// Creates an instance of <see cref="LinkTagBuilder"/>.
        /// </summary>
        /// <param name="path">The uri of the linked content.</param>
        /// <param name="relationship">The relationship to the document. Default is "stylesheet".</param>
        public LinkTagBuilder(Uri path, string relationship = "stylesheet")
            : base("link")
        {
            this.Attr("rel", relationship);
            this.Attr("href", path);
        }
    }
}
