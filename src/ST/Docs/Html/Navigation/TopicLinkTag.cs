using FubuCore;
using HtmlTags;
using ST.Docs.Topics;

namespace ST.Docs.Html.Navigation
{
    public class TopicLinkTag : HtmlTag
    {
        public TopicLinkTag(IUrlResolver resolver, Topic topic, string title)
            : base("a")
        {
            Attr("href", resolver.ToUrl(topic));

            if (title.IsEmpty()) title = topic.Title;
            Text(title);
            Attr("data-key", topic.Key);
        }
    }
}