
namespace StoryTeller.Results
{
    public interface IReporter
    {
        string ToHtml();
        string Title { get; }
    }
}
