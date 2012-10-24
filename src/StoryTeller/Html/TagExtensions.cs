using System.Linq;
using HtmlTags;

namespace StoryTeller.Html
{
    internal static class TagExtensions
    {
        public static HtmlTag JoinTagAtEnd(this HtmlTag tag, string tagName)
        {
            if (!tag.Children.Any())
            {
                return tag.Add(tagName);
            }

            HtmlTag lastTag = tag.Children.Last();
            return lastTag.TagName() == tagName ? lastTag : tag.Add(tagName);
        }

        public static T JoinTagAtEnd<T>(this HtmlTag tag) where T : HtmlTag, new()
        {
            if (!tag.Children.Any())
            {
                return tag.Add<T>();
            }

            HtmlTag lastTag = tag.Children.Last();
            return (T) (lastTag is T ? lastTag : tag.Add<T>());
        }
    }
}