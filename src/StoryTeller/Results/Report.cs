
namespace StoryTeller.Results
{
    // SAMPLE: ireporter
    public interface Report
    {
        string ToHtml();
        string Title { get; }
        string ShortTitle { get; }
        int Count { get; }
    }
    // ENDSAMPLE
}
