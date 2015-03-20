using HtmlTags;

namespace StoryTeller.Results
{
    public interface IReporter
    {
        HtmlTag ToHtml();
        string Title { get; }
    }
}
