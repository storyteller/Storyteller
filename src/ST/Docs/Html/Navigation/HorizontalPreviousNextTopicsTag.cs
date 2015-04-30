using HtmlTags;
using ST.Docs.Topics;

namespace ST.Docs.Html.Navigation
{
    public class HorizontalPreviousNextTopicsTag : HtmlTag
    {

        public HorizontalPreviousNextTopicsTag(Topic node, IUrlResolver resolver)
            : base("ul")
        {
            AddClass("nav");
            AddClass("pull-right");

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
}