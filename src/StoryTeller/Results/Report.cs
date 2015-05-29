
namespace StoryTeller.Results
{
    // SAMPLE: ireporter
    public interface Report
    {
        string ToHtml();
        string Title { get; }
    }
    // ENDSAMPLE
}
