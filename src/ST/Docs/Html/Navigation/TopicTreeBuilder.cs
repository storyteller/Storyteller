using System.Collections.Generic;
using HtmlTags;
using ST.Docs.Topics;

namespace ST.Docs.Html.Navigation
{
    public class TopicTreeBuilder
    {
        private readonly IUrlResolver _resolver;

        public TopicTreeBuilder(IUrlResolver resolver)
        {
            _resolver = resolver;
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


    }
}