using HtmlTags;
using StoryTeller.Domain;

namespace StoryTeller.Html
{
    public interface IHtmlWriter
    {
        HtmlDocument WritePreview(Test test);
    }
}