using System.Collections.Generic;
using System.Linq;
using HtmlTags;
using ST.Docs.Topics;

namespace ST.Docs.Html.Navigation
{
    public class TableOfContentsTag : HtmlTag
    {
        public TableOfContentsTag(Topic topic, IUrlResolver resolver)
            : base("ul")
        {
            AddClass("table-of-contents");

            writeChildNodes(topic, this, resolver);
        }

        private void writeChildNodes(Topic node, HtmlTag tag, IUrlResolver resolver)
        {
            node.Children.Each(childTopic =>
            {
                var li = tag.Add("li");

                li.Add("a").Attr("href", resolver.ToUrl((Topic) childTopic)).Text(childTopic.Title);

                if (childTopic.Children.Any())
                {
                    var ul = li.Add("ul");
                    writeChildNodes(childTopic, ul, resolver);
                }
            });
        }
    }
}