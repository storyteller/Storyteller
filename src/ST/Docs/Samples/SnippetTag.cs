using System;
using HtmlTags;

namespace ST.Docs.Samples
{
    public class SnippetTag : HtmlTag
    {
        public SnippetTag(Snippet snippet) : base("pre")
        {
            Add("code").AddClass("language-" + snippet.Language).Text(Environment.NewLine + snippet.Text);
        }
    }
}