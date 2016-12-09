using StorytellerDocGen.Topics;

namespace StorytellerDocGen.Html
{
    public class LiveUrlResolver : IUrlResolver
    {
        public string ToUrl(Topic current, Topic topic)
        {
            return "/" + topic.Url;
        }

        public string ToUrl(Topic current, string url)
        {
            if (url.StartsWith("/")) return url;

            return "/" + url;
        }

        public string RootUrlFrom(Topic current)
        {
            return "/";
        }
    }
}