using HtmlTags;
using ST.Docs.Topics;

namespace ST.Docs.Html.Navigation
{
    public class ParentBreadcrumbsNavigationTag : HtmlTag
    {
        public ParentBreadcrumbsNavigationTag(Topic node, IUrlResolver resolver)
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
}