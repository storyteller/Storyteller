using HtmlTags;
using ST.Docs.Topics;

namespace ST.Docs.Html.Navigation
{
    public class NamedTopicLinkTag : HtmlTag
    {
        public NamedTopicLinkTag(Topic node, IUrlResolver resolver)
            : base("li")
        {
            Add("a").Attr("href", resolver.ToUrl(node)).Attr("data-key", node.Key).Text(node.Title + " »");
        }
    }
}