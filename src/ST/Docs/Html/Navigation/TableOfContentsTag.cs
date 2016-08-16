using System.Collections.Generic;
using System.Linq;
using Baseline;
using HtmlTags;
using ST.Docs.Topics;

namespace ST.Docs.Html.Navigation
{
    public class TableOfContentsTag : HtmlTag
    {
        public TableOfContentsTag(Topic root, IUrlResolver resolver)
            : base("ul")
        {
            AddClass("table-of-contents");

            writeChildNodes(root, root, this, resolver);
        }

        private void writeChildNodes(Topic root, Topic parent, HtmlTag tag, IUrlResolver resolver)
        {
            parent.Children.Each(childTopic =>
            {
                var li = tag.Add("li");

                li.Add("a").Attr("href", resolver.ToUrl(root, childTopic)).Text(childTopic.Title);

                if (childTopic.Children.Any())
                {
                    var ul = li.Add("ul");
                    writeChildNodes(root, childTopic, ul, resolver);
                }
            });
        }
    }
}