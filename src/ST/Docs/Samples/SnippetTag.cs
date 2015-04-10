using System;
using FubuCore;
using HtmlTags;

namespace ST.Docs.Samples
{
    // TODO -- change this when we go to Prism.js
    public class SnippetTag : HtmlTag
    {
        public SnippetTag(Snippet snippet) : base("pre")
        {
            Text(Environment.NewLine + snippet.Text);
            AddClass("prettyprint");

            if (snippet.Class.IsNotEmpty())
            {
                AddClass(snippet.Class);
            }

            if (snippet.Start > 0)
            {
                Data("linenums", snippet.Start);
            }
        }
    }
}