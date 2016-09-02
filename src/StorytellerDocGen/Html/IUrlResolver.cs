using StorytellerDocGen.Topics;

namespace StorytellerDocGen.Html
{
    public interface IUrlResolver
    {
        string ToUrl(Topic current, Topic topic);
        string ToUrl(Topic current, string url);
        string RootUrlFrom(Topic current);
    }
}