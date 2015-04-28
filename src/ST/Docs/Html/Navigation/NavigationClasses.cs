using System.Collections.Generic;
using FubuCore;
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

    public class TopLeftTopicNavigationTag : HtmlTag
    {
        public TopLeftTopicNavigationTag(Topic node, IUrlResolver resolver)
            : base("ul")
        {
            AddClass("nav");

            var current = new NamedTopicLinkTag(node, resolver);
            current.AddClass("active");

            Append(current);

            Topic parent = node.Parent;
            if (parent != null)
            {
                var tag = new NamedTopicLinkTag(parent, resolver);
                Children.Insert(0, tag);
            }

            var index = node.FindTop();
            if (index != null && !ReferenceEquals(node, index) && !ReferenceEquals(index, parent))
            {
                var indexTag = new NamedTopicLinkTag(node, resolver);
                Children.Insert(0, indexTag);
            }
        }
    }

    public class TopRightTopicNavigationTag : HtmlTag
    {

        public TopRightTopicNavigationTag(Topic node, IUrlResolver resolver)
            : base("ul")
        {
            AddClass("nav");
            Style("float", "right");

            Topic previous = node.FindPrevious();
            if (previous != null)
            {
                Add("li/a")
                    .Attr("href", resolver.ToUrl(previous))
                    .Text("Previous")
                    .Attr("title", previous.Title);
            }

            Topic next = node.FindNext();
            if (next != null)
            {
                Add("li/a")
                    .Attr("href", resolver.ToUrl(next))
                    .Text("Next")
                    .Attr("title", next.Title);
            }
        }
    }

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

    public class TopicTreeBuilder
    {
        private readonly IUrlResolver _resolver;

        public TopicTreeBuilder(IUrlResolver resolver)
        {
            _resolver = resolver;
        }

        public IEnumerable<HtmlTag> BuildTopTopicLinks(Topic topic)
        {
            yield return new TopLeftTopicNavigationTag(topic, _resolver);
            yield return new TopRightTopicNavigationTag(topic, _resolver);
        }


        public IEnumerable<HtmlTag> BuildLeftTopicLinks(Topic topic)
        {
            var next = topic.FindNext();

            if (next != null)
            {
                yield return new HtmlTag("h3").AddClass("no-margin").Text("Next");
                yield return new HtmlTag("p", tag => tag.Append(new TopicLinkTag(_resolver, next, null)));
            }

            var previous = topic.FindPrevious();

            if (previous != null)
            {
                yield return new HtmlTag("h3").AddClass("no-margin").Text("Previous");
                yield return new HtmlTag("p", tag => tag.Append(new TopicLinkTag(_resolver, previous, null)));
            }
        }

        public HtmlTag BuildTableOfContents(Topic topic)
        {
            if (topic == null) return new HtmlTag("div").Render(false);

            return new HtmlTag("div")
                .Append("h2", h2 => h2.AddClass("half-margin").Text("Table of Contents"))
                .Append(new TableOfContentsTag(topic, _resolver));
        }
    }

}